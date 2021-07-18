#include <stdio.h>
#include <stdlib.h>

int main (void){
// fazendo aparecer os numeros pares de 0 a 100
	
	int numero = 0;
	int resto;
	
	while(numero <= 100){
		numero++;
		resto = (numero % 2);
		if(resto == 0){
			printf("%d", numero);
			printf("\n");
		}
	}
	
	
	return(0);
}
