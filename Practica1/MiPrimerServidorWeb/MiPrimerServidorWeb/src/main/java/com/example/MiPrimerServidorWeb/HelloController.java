package com.example.MiPrimerServidorWeb;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello desde mi controlador SpringBoot";
    }

    @GetMapping("/saludo")
    public String saludar(@RequestParam String nombre) {
        return "Hola " + nombre + " este es mi servidor de aplicacion";
    }

    @PostMapping("/mensaje")
    public String recibirMensaje(@RequestBody String mensaje) {
        return "Recibi tu mensaje" + mensaje;
    }
}
