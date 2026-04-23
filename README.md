¨SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 1: La conquista dello spazio

# Hubble space telescope
Autore: Laura Pantani \
[Titolo progetto](https://github.com/ixd-supsi/2026/tree/main/esempi/es06_array_7)


## Introduzione e tema
Il mio progetto intende rendere omaggio al satellite Hubble. Dal 1985 fino a oggi, grazie al suo contributo, abbiamo ottenuto le prime immagini dettagliate dello spazio, fondamentali per lo studio e la comprensione dell’universo.


## Riferimenti progettuali
Al momento non sono stati individuati riferimenti progettuali specifici.

 


## Design dell’interfaccia e modalità di interazione
Il progetto si sviluppa come una piattaforma documentativa dedicata alla storia di Hubble. In una prima fase, l’utente può esplorare contenuti informativi sul satellite e sulla sua evoluzione nel tempo. Successivamente, viene presentata una sezione di archivio che raccoglie una selezione di immagini dello spazio catturate da Hubble, consultabili in modo semplice e intuitivo.

https://github.com/user-attachments/assets/38d1768e-a90e-45dd-b12b-1ac0aa1151b3

[<img src="doc/cards.gif" width="500" alt="Magic trick">]()


## Tecnologia usata
Ho usato un visual code con gemini code assist.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Il target del mio progetto sono i ragazzi e il possibile contesto d'uso é educativo e scolastico.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()