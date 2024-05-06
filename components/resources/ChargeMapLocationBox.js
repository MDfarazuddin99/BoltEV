import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { Text, Divider } from "@rneui/themed";

export default function ChargeMapLocationBox({ location, onPress }) {
  const publicImageURL =
    location.photos != undefined
      ? "https://maps.googleapis.com/maps/api/place/photo?photoreference=" +
        location.photos[0].photo_reference +
        "&sensor=false&maxheight=1600&maxwidth=1600&key=AIzaSyAnL6me3kIi2CBnb60M6k0hEl1VKApgT5M"
      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
  // const publicImageURL = "https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg";
  const imgUrl = (location.type === "ChargeEV")? location.locationImage: publicImageURL;
  //console.log(location);
  return (
    <TouchableOpacity style={styles.locationBox} onPress={onPress}>
      {/* Remove "" in image source when deploy */}
      {/* Rendering images burn through Firestore bandwidth */}
      {/* <Image
        source={{
          url:
            location.type == "ChargeEV"
              ? location.locationImage
              : publicImageURL,
            // "https://firebasestorage.googleapis.com/v0/b/boltev-7331e.appspot.com/o/photos%2F73568326-ba72-42ee-98b9-b58a1c75e23f1713904311950.jpg?alt=media&token=d23109c4-c217-434a-8652-3ffd5db0736e"
        }}
        // style={styles.image}
        style={styles.image}
        onError={() => console.log("Error loading image")}
      /> */}
      <Image
        source={{
          uri: imgUrl 
        }}
        style={styles.image}
        />
      <View style={{ width: "50%" }}>
        <Text h4 h4Style={{ fontFamily: "Inter-Black", maxHeight: "40%", color:"white" }}>
          {location.type == "ChargeEV" ? location.address : location.name}
        </Text>
        <Text h4 h4Style={{ fontSize: 10, color:"white" }}>
          {location.distance > 1000
            ? Math.round(location.distance / 100) / 10 + " km"
            : Math.round(location.distance) + "m"}{" "}
          away
        </Text>
        <Divider
          style={{ marginTop: "2%", marginBottom: "2%", color:"white" }}
          color="white"
        />
        <Text h3 h3Style={{ fontSize: 10, color:"white" }} style={{ marginBottom: "2%", color:"white" }}>
          {location.rating != 0
            ? Math.round(location.rating * 10) / 10 + "⭐"
            : "No Reviews"}
        </Text>
        <Text h3 h3Style={{ fontSize: 12, color:"white" }}>
          {location.type == "ChargeEV"
            ? location.chargerType.join() + " Charger"
            : location.vicinity}
        </Text>
        <Text h3 h3Style={{ fontSize: 12, color:"white" }}>
          {location.type == "ChargeEV"
            ? "$" + location.costPerCharge + " / charge"
            : "Public Charger"}
        </Text>
        {location.type == "ChargeEV" && location.chargerType.length < 2 ? (
          <Image
            source={
              location.chargerType.includes("CCS2")
                ? require("../../assets/chargers/CCS.png")
                : require("../../assets/chargers/type2.png")
            }
            style={styles.charger}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  locationBox: {
    width: "90%",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2%",
    marginBottom: "5%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  charger: {
    width: 20,
    height: 20,
    position: "absolute",
    right: "-10%",
    bottom: 0,
  },
});
