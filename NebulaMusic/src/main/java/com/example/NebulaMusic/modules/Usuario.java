package com.example.NebulaMusic.modules;

public class Usuario {
    private String nombre;
    private String correo;
    private String contrasena;
    private String pseudonimo;
    private String genero;
    private String suscripcion;
    private String fecha_nacimiento;
    private String terminos;
    private String comentarios;

    public Usuario() {
    }

    public Usuario(String nombre, String correo, String contrasena, String pseudonimo,
                   String genero, String suscripcion, String fecha_nacimiento,
                   String terminos, String comentarios) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.pseudonimo = pseudonimo;
        this.genero = genero;
        this.suscripcion = suscripcion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.terminos = terminos;
        this.comentarios = comentarios;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getPseudonimo() {
        return pseudonimo;
    }

    public void setPseudonimo(String pseudonimo) {
        this.pseudonimo = pseudonimo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getSuscripcion() {
        return suscripcion;
    }

    public void setSuscripcion(String suscripcion) {
        this.suscripcion = suscripcion;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getTerminos() {
        return terminos;
    }

    public void setTerminos(String terminos) {
        this.terminos = terminos;
    }

    public String getComentarios() {
        return comentarios;
    }

    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", contrasena='" + contrasena + '\'' +
                ", pseudonimo='" + pseudonimo + '\'' +
                ", genero='" + genero + '\'' +
                ", suscripcion='" + suscripcion + '\'' +
                ", fecha_nacimiento='" + fecha_nacimiento + '\'' +
                ", terminos='" + terminos + '\'' +
                ", comentarios='" + comentarios + '\'' +
                '}';
    }
}