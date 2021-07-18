#include <stdio.h>
#include <stdlib.h>

int main (void){
	int idade;
	int acompanhante;
	int continuar;
	
	
	do{
		printf("Digite a sua Idade: ");
		printf("");
		scanf("%d" , &idade);
		printf("esta com acompanhante ? digite 1 para sim e 2 para nao: ");
		printf("");
		scanf("%d", &acompanhante);
		
		
		if( idade >= 18 && acompanhante == 1){
			printf("\nmaior de idade e esta com acompanhante. Pode entrar\n");
		}else if(idade >= 18 && acompanhante == 2){
			printf("\nsem acompanhante mas e maior de idade. Pode entrar\n");
		}else if(idade < 18 && acompanhante == 1){
			printf("\nmenor de idade mas esta acompanhado. Pode entrar\n");
		}else{
			printf("\nmenor de idade e sem acompanhante. Nao pode entrar \n");
		}
		
		
	
		printf("Deseja voltar ? digite 1 para sim e 2 para nao: ");
		scanf("%d" , &continuar);
		
	}while (continuar == 1);
	
	
	return(0);
}
