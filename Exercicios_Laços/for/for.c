#include <stdio.h>
#include <stdlib.h>

int main (void){
// fazendo o fatorial de um numero com o laço for
int numero;
int i;
int continuar;


	do{
		printf("Digite um numero para saber o fatorial: ");
		scanf("%d", &numero);
		
		for(i = numero -1; i >=2 ; i --){
			numero = numero * i;
		}
		
		printf("%d", numero);
		printf("\n");
		
		printf("Digite 1 para continuar e 2 para sair: ");
		scanf("%d", &continuar);
		
	}while(continuar == 1);
}
