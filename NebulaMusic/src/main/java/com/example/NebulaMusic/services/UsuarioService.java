package com.example.NebulaMusic.services;

import com.example.NebulaMusic.modules.Usuario;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UsuarioService {

    private final Map<String, Usuario> usuarios = new ConcurrentHashMap<>();

    public UsuarioService() {
    }

    public void registrar(Usuario usuario) {
        usuarios.put(usuario.getCorreo(), usuario);
    }

    public boolean existeCorreo(String correo) {
        return usuarios.containsKey(correo);
    }

    public boolean autenticar(String correo, String contrasena) {
        Usuario usuario = usuarios.get(correo);
        return usuario != null && usuario.getContrasena().equals(contrasena);
    }
}