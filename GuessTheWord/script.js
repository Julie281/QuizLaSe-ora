// script.js
document.addEventListener('DOMContentLoaded', () => {
    const wordList = [
        'algoritmo', 'api', 'aplicación', 'archivo', 'array', 'backend', 'base de datos', 'biblioteca', 'binario', 'bit', 'blog', 'bucle', 'bug', 'byte', 'cache', 'cadena', 
        'código', 'compilador', 'comprimir', 'conectividad', 'consola', 'contraseña', 'cpu', 'criptografía', 'css', 'ciberseguridad', 'datos', 'debug', 'desencriptar', 
        'desinstalar', 'despliegue', 'disco duro', 'dominio', 'dump', 'ebook', 'email', 'emulador', 'encriptar', 'enlace', 'entorno', 'escaner', 'esquema', 'etiqueta', 
        'favicon', 'firewall', 'firma digital', 'fondo', 'formatear', 'framework', 'frontend', 'fuente', 'gif', 'github', 'hardware', 'hipervínculo', 'host', 'html', 
        'http', 'https', 'imagen', 'impresora', 'index', 'informática', 'input', 'instalar', 'internet', 'ip', 'javascript', 'json', 'kernel', 'lenguaje', 'licencia', 'linux', 
        'local', 'login', 'logout', 'loop', 'mac', 'macro', 'malware', 'memoria', 'metadatos', 'modem', 'módulo', 'motor de búsqueda', 'multimedia', 'navegador', 
        'nodo', 'nombre de usuario', 'nube', 'objeto', 'octeto', 'offline', 'online', 'ordenador', 'output', 'paginar', 'pantalla', 'parámetro', 'parsing', 'password', 
        'paquete', 'pdf', 'pendrive', 'periférico', 'permiso', 'pixel', 'plugin', 'página web', 'programa', 'programador', 'protocolo', 'proxy', 'query', 'ram', 
        'red', 'repositorio', 'resolución', 'router', 'ruta', 'sandbox', 'script', 'servidor', 'software', 'solicitud', 'sql', 'stack', 'sistema', 'spam', 'ssd', 
        'ssl', 'string', 'subnet', 'tabla', 'tarjeta gráfica', 'tcp', 'terminal', 'token', 'transferencia', 'trojan', 'unidad', 'update', 'url', 'usb', 'usuario', 
        'variable', 'versión', 'virus', 'vpn', 'web', 'webinar', 'wifi', 'zombie', 'zip', 'abecedario', 'abeja', 'abogado', 'acordeón', 'actor', 'aire', 
        'alacrán', 'alcachofa', 'alcancía', 'alfiler', 'alga', 'almohada', 'altar', 'amapola', 'ámbar', 'ancla', 'andén', 'anillo', 'árbol', 'arco', 'arena', 
        'armario', 'aroma', 'arpa', 'artista', 'árbol', 'asiento', 'aspiradora', 'atardecer', 'ave', 'avión', 'azotea', 'bacteria', 'bahía', 'bala', 'balanza', 'balsa', 'banana', 
        'barco', 'barro', 'barriga', 'báscula', 'bebé', 'bebida', 'belén', 'bello', 'bici', 'bicicleta', 'bikini', 'billete', 'bingo', 'bisturí', 'blanco', 'bloque', 'bolsa', 
        'bolsillo', 'bomba', 'bombilla', 'bosque', 'bote', 'botella', 'botón', 'brazo', 'brocha', 'brote', 'bruja', 'bruma', 'brújula', 'burro', 'busca', 'butaca', 'buzo', 
        'cabra', 'cabra', 'cacerola', 'cadena', 'café', 'caja', 'cajón', 'calabaza', 'calendario', 'calor', 'cama', 'cámara', 'cambio', 'camión', 'campana', 'canal', 
        'cangrejo', 'cañón', 'capa', 'capilla', 'caracol', 'carcajada', 'carpeta', 'carta', 'cartera', 'carro', 'casa', 'casco', 'cascada', 'casco', 'castillo', 'catedral', 
        'caza', 'cebra', 'cedro', 'celeste', 'celular', 'cereal', 'cerro', 'cerradura', 'cerveza', 'chaleco', 'charla', 'charco', 'chico', 'chocolate', 'choque', 'churro', 
        'cielo', 'ciencia', 'ciudad', 'clamor', 'claro', 'clase', 'clavo', 'cliente', 'clima', 'cobija', 'coche', 'codo', 'cofre', 'colina', 'collar', 'colmena', 
        'columpio', 'cometa', 'comida', 'compás', 'conejo', 'congreso', 'conserje', 'corazón', 'corbata', 'corcho', 'correo', 'corrección', 'corte', 'cosa', 'cosmos', 'costo', 
        'crema', 'crisis', 'cuchara', 'cuello', 'cuenco', 'cueva', 'cuaderno', 'cuerda', 'cuento', 'cuerno', 'cueva', 'cura', 'curva', 'dado', 'dama', 'dardo', 'deber', 
        'dedo', 'delirio', 'demonio', 'dibujo', 'diente', 'diestro', 'difunto', 'dilema', 'dinero', 'dios', 'disciplina', 'disco', 'diseño', 'disfraz', 'disparo', 'diurno', 
        'divisa', 'doble', 'dólar', 'domino', 'don', 'dormir', 'dragón', 'ducha', 'duda', 'duelo', 'dulce', 'duque', 'duna', 'duro', 'eclipse', 'eco', 'edad', 'edificio', 
        'editor', 'educación', 'efecto', 'egipto', 'eje', 'ejemplo', 'elefante', 'embudo', 'emoción', 'empaque', 'empate', 'empeño', 'empresa', 'enano', 'encaje', 'encanto', 
        'encía', 'enemigo', 'energía', 'enlace', 'enorme', 'entrega', 'entrada', 'envidia', 'epoca', 'equipo', 'escala', 'escena', 'esclavo', 'escoba', 'escolta', 'escritor', 
        'escuadra', 'esquina', 'estadio', 'estilo', 'estilo', 'estuche', 'estufa', 'etapa', 'eterno', 'ético', 'examen', 'exilio', 'éxito', 'explorador', 'extraterrestre', 
        'fábrica', 'fábula', 'fachada', 'falla', 'fama', 'familia', 'farola', 'felicidad', 'fiera', 'figura', 'fijo', 'filtro', 'final', 'fino', 'firma', 'fisco', 'flaco', 
        'flecha', 'flor', 'foca', 'fogata', 'folio', 'fondo', 'foto', 'fórmula', 'fortuna', 'franja', 'frasco', 'frase', 'frío', 'fuego', 'fuerza', 'furia', 'gafa', 'galería', 
        'gallina', 'gancho', 'gato', 'gaviota', 'gemelo', 'genio', 'gesto', 'gigante', 'gira', 'globo', 'goma', 'gordo', 'gorra', 'gota', 'gracia', 'grado', 'grano', 
        'grasa', 'gratis', 'grupo', 'guía', 'gusano', 'gustar', 'gusto', 'haber', 'hábito', 'hacha', 'hada', 'halcón', 'hallazgo', 'hambre', 'hámster', 'harina', 'haz', 
        'hedor', 'helicóptero', 'héroe', 'hierro', 'hielo', 'himno', 'hoguera', 'hoja', 'hombre', 'honor', 'horno', 'huerto', 'huevo', 'huracán', 'idea', 'idioma', 'iglesia', 
        'igual', 'ilusión', 'imagen', 'imán', 'impacto', 'imperio', 'impulso', 'inca', 'inicio', 'insecto', 'invierno', 'isla', 'jabón', 'jamón', 'jardín', 'jefe', 
        'jinete', 'juego', 'juicio', 'juguete', 'junta', 'jurel', 'laberinto', 'lago', 'lágrima', 'laguna', 'lámpara', 'lana', 'lancha', 'lápiz', 'largo', 'larva', 'lazo', 
        'leche', 'lección', 'lejos', 'leña', 'león', 'lesión', 'libro', 'líder', 'lima', 'límite', 'limón', 'lince', 'línea', 'linterna', 'llama', 'llave', 'lobo', 'locura', 
        'lote', 'lucha', 'lugar', 'luz', 'maceta', 'madera', 'madre', 'maestro', 'mago', 'maldad', 'malo', 'malta', 'mamá', 'mango', 'manta', 'mapa', 'mar', 'masa', 'máscara', 
        'matriz', 'medalla', 'media', 'médico', 'mejilla', 'mellizo', 'miedo', 'miel', 'mierda', 'miga', 'militar', 'millón', 'minero', 'minuto', 'mirador', 'modelo', 
        'moho', 'molino', 'mono', 'montaña', 'moño', 'moreno', 'mueble', 'muelle', 'muerto', 'mujer', 'murciélago', 'muro', 'música', 'nación', 'nadar', 'naranja', 
        'nave', 'neblina', 'negocio', 'neón', 'nervio', 'niña', 'nido', 'nieve', 'ninja', 'nivel', 'noble', 'noche', 'norte', 'nota', 'noticia', 'novela', 'nube', 'nuevo', 
        'número', 'nutria', 'objeto', 'ocaso', 'oceano', 'ocho', 'oda', 'odio', 'oficina', 'ogro', 'oído', 'ojo', 'ola', 'oleada', 'olivo', 'olla', 'olor', 'onza', 'operación', 
        'órbita', 'orilla', 'oro', 'oso', 'otoño', 'oveja', 'óvulo', 'página', 'pájaro', 'palacio', 'paloma', 'pan', 'pantano', 'paquete', 'par', 'parcela', 'pared', 
        'parque', 'parte', 'pastel', 'pasto', 'patrón', 'pecado', 'pecera', 'pecho', 'pelo', 'pelota', 'peluca', 'pena', 'pene', 'pensión', 'persona', 'pez', 'piel', 'pieza', 
        'pila', 'piloto', 'pino', 'plaga', 'plano', 'planta', 'plato', 'playa', 'plaza', 'plomo', 'pobre', 'poema', 'poeta', 'polvo', 'poner', 'porción', 'portal', 'poso', 
        'pradera', 'precio', 'pregunta', 'premio', 'presa', 'preso', 'préstamo', 'primera', 'primavera', 'primo', 'príncipe', 'proa', 'proceso', 'profesor', 'prueba', 'pueblo', 
        'puerta', 'pulga', 'pulpo', 'punta', 'punto', 'pupila', 'química', 'quinto', 'rabo', 'radio', 'rana', 'rango', 'ratón', 'rayo', 'razón', 'reacción', 'rebaño', 'receta', 
        'red', 'reflejo', 'regla', 'reina', 'reino', 'res', 'resina', 'respiro', 'rey', 'riego', 'riesgo', 'rincón', 'ritmo', 'robles', 'rojo', 'rosa', 'rostro', 'ruta', 
        'sabor', 'sabueso', 'saco', 'sala', 'salida', 'salón', 'salto', 'sapo', 'saque', 'satélite', 'seda', 'semana', 'semilla', 'señal', 'serpiente', 'siembra', 'sierra', 
        'siglo', 'signo', 'silencio', 'silla', 'sirena', 'sistema', 'sol', 'solución', 'sombrero', 'sonrisa', 'sopa', 'sótano', 'suelo', 'sueño', 'suerte', 'superficie', 
        'susto', 'tabaco', 'taco', 'tajo', 'taladro', 'taller', 'tallo', 'tamaño', 'tango', 'tanque', 'tarde', 'tarifa', 'teatro', 'tela', 'tema', 'temor', 'tempestad', 
        'templo', 'tenedor', 'teoría', 'terapia', 'terreno', 'tigre', 'tijera', 'timbre', 'tinta', 'tiro', 'tiza', 'toalla', 'tobillo', 'tomate', 'tonto', 'tormenta', 
        'torre', 'tortuga', 'trabajo', 'tragedia', 'trampa', 'trato', 'tren', 'triángulo', 'trueno', 'tubo', 'tulipán', 'túnel', 'uñas', 'urna', 'vacío', 'vado', 'vagón', 
        'valle', 'vapor', 'vaso', 'vello', 'vela', 'ventana', 'verano', 'verde', 'viaje', 'vida', 'viento', 'viga', 'vino', 'violín', 'vivero', 'volcán', 'vuelo', 'yate', 
        'yema', 'yerno', 'yugo', 'zanja', 'zorro', 'zurdo', 'zumo'
    ];
    
    const maxAttempts = 10;
    let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    let attemptsLeft = maxAttempts;
    let guessedLetters = [];
    let wordDisplay = Array(selectedWord.length).fill('_').join('');

    const wordDisplayElement = document.getElementById('word-display');
    const attemptsLeftElement = document.getElementById('attempts-left');
    const lettersTriedElement = document.getElementById('letters-tried');
    const messageElement = document.getElementById('message');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');

    wordDisplayElement.textContent = wordDisplay;
    attemptsLeftElement.textContent = attemptsLeft;

    guessButton.addEventListener('click', () => {
        const guessedLetter = guessInput.value.toLowerCase();
        guessInput.value = '';
        if (guessedLetter && !guessedLetters.includes(guessedLetter)) {
            guessedLetters.push(guessedLetter);
            if (selectedWord.includes(guessedLetter)) {
                updateWordDisplay(guessedLetter);
                if (!wordDisplay.includes('_')) {
                    messageElement.textContent = '¡Felicidades, has ganado! 🎉';
                    endGame();
                }
            } else {
                attemptsLeft--;
                attemptsLeftElement.textContent = attemptsLeft;
                if (attemptsLeft === 0) {
                    messageElement.textContent = `¡Has perdido! 🧐 La palabra era: ${selectedWord}`;
                    endGame();
                }
            }
            lettersTriedElement.textContent = guessedLetters.join(', ');
        }
    });

    function updateWordDisplay(letter) {
        wordDisplay = selectedWord.split('').map((char, index) => {
            return guessedLetters.includes(char) ? char : wordDisplay[index];
        }).join('');
        wordDisplayElement.textContent = wordDisplay;
    }

    function endGame() {
        guessButton.disabled = true;
        guessInput.disabled = true;
    }
});
