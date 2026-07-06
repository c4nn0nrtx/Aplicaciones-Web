function createPowerTower(height, energyChar) {
    // Control de flujo: se valida el rango antes de ejecutar la lógica principal.
    if (height < 1 || height > 100) {
        throw new Error("La altura debe estar entre 1 y 100.");
    }

    const lines = [];
    
    /* 
       Cálculo del ancho máximo de la base. 
       Como la torre crece de forma impar (1, 3, 5...), el nivel más ancho 
       está definido por la fórmula: (2 * height) - 1. 
       Este valor se usa como referencia global para calcular el centrado (padding).
    */
    const maxWidth = (2 * height) - 1;

    for (let i = 0; i < height; i++) {
        // Cantidad de caracteres de energía para el nivel actual (patrón impar).
        const energyCount = (2 * i) + 1;
        
        // Cantidad de guiones bajos por lado para asegurar el centrado perfecto.
        const paddingCount = (maxWidth - energyCount) / 2;

        const padding = '_'.repeat(paddingCount);
        const energy = energyChar.repeat(energyCount);
        
        lines.push(`${padding}${energy}${padding}`);
    }

    /* 
       El núcleo tiene un ancho fijo de 1 carácter. Se aplica la misma lógica 
       de distribución de espacio restante para mantener la alineación central.
    */
    const corePaddingCount = (maxWidth - 1) / 2;
    const corePadding = '_'.repeat(corePaddingCount);
    const coreLine = `${corePadding}#${corePadding}`;

    lines.push(coreLine);
    lines.push(coreLine);

    /* 
       Se utiliza .join('\n') para estructurar el string final. 
       Esto garantiza que cada nivel tenga su salto de línea, omitiendo 
       automáticamente el carácter '\n' en la última línea para cumplir la regla.
    */
    return lines.join('\n');
}

// Ejecución de prueba
// Cambie el 5 por algún otro valor que quiera probar dentro del rango permitido (1-100).
const tower = createPowerTower(5, '*');
console.log(tower);