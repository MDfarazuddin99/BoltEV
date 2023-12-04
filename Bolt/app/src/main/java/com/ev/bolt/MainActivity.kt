package com.ev.bolt

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.ev.bolt.ui.theme.BoltTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BoltTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = Color(0xFF1D1C1C)
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {

                        Image(
                            painter = painterResource(id = R.drawable.logo),
                            contentDescription = "Logo",
                            modifier = Modifier
                                .size(250.dp),
                            contentScale = ContentScale.Fit
                        )

                        Spacer(modifier = Modifier.size(24.dp))

                        Text(
                            text = "Login",
                            fontWeight = FontWeight.SemiBold,
                            color = Color(0xFF55F05A),
                            fontSize = 32.sp
                        )

                        Spacer(modifier = Modifier.size(32.dp))


                        var email by rememberSaveable { mutableStateOf("") }
                        OutlinedTextField(
                            value = email,
                            onValueChange = {
                                email = it
                            },
                            label = { Text(text = "Enter email address") }
                        )

                        Spacer(modifier = Modifier.size(8.dp))

                        var password by rememberSaveable { mutableStateOf("") }
                        var passwordVisible by rememberSaveable { mutableStateOf(false) }
                        OutlinedTextField(
                            value = password,
                            onValueChange = {
                                password = it
                            },
                            visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                            label = { Text(text = "Enter password") },
                            trailingIcon = {
                                val image = if (passwordVisible)
                                    painterResource(id = R.drawable.visible)
                                else painterResource(id = R.drawable.invisible)

                                // Please provide localized description for accessibility services
                                val description =
                                    if (passwordVisible) "Hide password" else "Show password"

                                IconButton(onClick = { passwordVisible = !passwordVisible }) {
                                    Icon(painter = image, description, Modifier.size(24.dp))
                                }
                            }
                        )

                        Spacer(modifier = Modifier.size(32.dp))

                        Button(
                            onClick = {
                            },
                            shape = RoundedCornerShape(4.dp),
                            modifier = Modifier.fillMaxWidth().padding(horizontal = 96.dp),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = Color(0xFF55F05A),
                                contentColor = Color.Black


                            )
                        ) {
                            Text(text = "Login")
                        }

                        Spacer(modifier = Modifier.size(24.dp))

                        Row {
                            Text(
                                text = "Don't have an account? ",
                                textAlign = TextAlign.Center,
                                color = Color.White
                            )

                            Text(
                                modifier = Modifier.clickable {
                                    startActivity(Intent(this@MainActivity,Registration::class.java))
                                },
                                text = "Register",
                                color = Color(0xFF55F05A),
                                fontWeight = FontWeight.Bold,
                                textDecoration = TextDecoration.Underline
                            )
                        }
                    }
                }
            }
        }
    }
}

