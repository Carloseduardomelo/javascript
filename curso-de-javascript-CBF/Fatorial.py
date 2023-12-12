

while True:
    
    numero_fatorial = int(input('digite um numero para saber o fatorial: '))
    fatorial_resultado = 1
    
    while (numero_fatorial >=1 ):
        fatorial_resultado *= numero_fatorial
        
        numero_fatorial -= 1
        
    print(fatorial_resultado)
        
    opacao = input('digite S para sair ou C para continuar: ')
    
    
    if(opacao == 'S' or opacao == 's'):
        break
    

