/*
var listElement= document.getElementById('lista')
var inputElement= document.querySelector('#app input')
var buttonElement= document.querySelector('#app button') 
var todos =  JSON.parse(localStorage.getItem('list_todos')) || []
function renderTodos(){
    listElement.innerHTML=''
    for( todo of todos){
        var todoElement= document.createElement('li')
        var todoText = document.createTextNode(todo) 
        var linkElement =document.createElement('a')
        var linkText=document.createTextNode('Excluir')
        linkElement.setAttribute('href','#')
        linkElement.appendChild(linkText)
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick','deleteTodo(' + pos +')')
        todoElement.appendChild(todoText) 
        todoElement.appendChild(linkElement) 
        listElement.appendChild(todoElement)
    }
}
renderTodos() 

function addTodo(){
    var todoText= inputElement.value 
    todos.push(todoText) 
    inputElement.value=''
    renderTodos()
    saveToStorage()
}
buttonElement.onclick=addTodo

function deleteTodo(pos){
    saveToStorage()
    todos.splice(pos,1) 
    renderTodos()
}
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))

}
*/ 

var listElement=window.document.querySelector('#app ul')
var inputElement=window.document.querySelector('#app input')
var buttonElement=window.document.querySelector('#app button')
var todos = JSON.parse(localStorage.getItem('list_todos')) || []

    
    function renderTodos(){
        listElement.innerHTML=''
        for(todo of todos){
            
            
            var todoElement= document.createElement('li')
            todoElement.style.listStyle='none';
            
            
            var todoText = document.createTextNode(todo) 
            var linkElement =document.createElement('a')
            var linkText=document.createTextNode('Excluir')
            linkElement.setAttribute('href','#')
            linkElement.appendChild(linkText)
            var pos = todos.indexOf(todo)
            linkElement.setAttribute('onclick','deleteTodo(' + pos +')')
            
            todoElement.appendChild(todoText) 
            todoElement.appendChild(linkElement) 
            listElement.appendChild(todoElement)
            
        }
    }
    renderTodos()

    function addTodo(){
        var todoText=inputElement.value 
        
            if(todoText!='' && todoText.length<=26 && todos.length<=12 ){
        todos.push(todoText)
        inputElement.value=''
        renderTodos()
        saveToStorage()
        
            }else{
             inputElement.focus()
            alert('Adicione um Todo com até 26 caracteres ')
                inputElement.value=''
                
        } if(todos.length>=12){
           inputElement.disabled=true
           
        }if(todos.length<12){
            inputElement.disabled=false
        }
        

    } 
    buttonElement.onclick=addTodo

    function digitou(e){
        if(event.keyCode==13 && inputElement.value!=''){
            addTodo()
        }
    }
    
    function deleteTodo(pos){
        todos.splice(pos,1)
        renderTodos()
        saveToStorage()

    }   
   function deleteTodosOsTodos(){
       todos.length=''
       renderTodos()
       saveToStorage()
   }
    
    function saveToStorage(){
        localStorage.setItem('list_todos', JSON.stringify(todos))

    } 

    window.addEventListener('load',horario)
    window.addEventListener('load',diario)

    var tmp;
        function horario(){
            var text=window.document.getElementById('hora')
            var data= new Date()
            var hora= data.toLocaleTimeString()
            text.innerHTML=hora
            tmp=setInterval(horario,1000)
        } 

        function diario(){
            var data=new Date()
            var dia= data.getDay()
           var mostra= window.document.getElementById('dia')
            if(dia==0){
                mostra.innerHTML='Dom'
            }else if(dia==1){
                mostra.innerHTML='Seg'
            }else if(dia==2){
                mostra.innerHTML='Ter'
            }else if(dia==3){
                mostra.innerHTML='Qua'
            }else if(dia==4){
                mostra.innerHTML='Qui'
            }else if(dia==5){
                mostra.innerHTML='Sex'
            }else if(dia==6){
                mostra.innerHTML='Sab'
            }
        }
        function diaMostrar(){
            var data=new Date()
            var dia= data.getDay()
           var mostra= window.document.getElementById('dia')
            if(dia==0){
                mostra.innerHTML='Domingo'
            }else if(dia==1){
                mostra.innerHTML='Segunda-feira'
            }else if(dia==2){
                mostra.innerHTML='Terça-feira'
            }else if(dia==3){
                mostra.innerHTML='Quarta-feira'
            }else if(dia==4){
                mostra.innerHTML='Quinta-feira'
            }else if(dia==5){
                mostra.innerHTML='Sexta-feira'
            }else if(dia==6){
                mostra.innerHTML='Sábado'
            }
        } 
         
        window.addEventListener('load',escrevaTodo) 

            function escrevaTodo(){
                inputElement.focus()
            } 
            window.addEventListener('load',fraseDoDia)
            var tmp;
            function fraseDoDia(){
                 var frases=['"Não desista dos seus sonhos"','"A pressa é inimiga da perfeição"','"O que você deixaria de fazer se não tivesse medo?"','"Não tenha como valioso alguém que não te tem como valioso"','"As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente"','"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre."','"A persistência é o caminho do êxito."','"O insucesso é apenas uma oportunidade para recomeçar com mais inteligência."','" meio da dificuldade encontra-se a oportunidade."','"O que me preocupa não é o grito dos maus. É o silêncio dos bons"','"Choramos ao nascer porque chegamos a este imenso cenário de dementes."','"É mais fácil obter o que se deseja com um sorriso do que à ponta da espada."','"Os miseráveis não têm outro remédio a não ser a esperança"','"Pensar é o trabalho mais difícil que existe. Talvez por isso tão poucos se dediquem a ele."','"Não existe um caminho para a felicidade. A felicidade é o caminho."','"A alegria de fazer o bem é a única felicidade verdadeira."','"É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso"','"Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo."','"Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás."','"Pessimismo leva à fraqueza, otimismo ao poder"','"Se você obedece todas as regras, acaba perdendo a diversão"','"O que não provoca minha morte faz com que eu fique mais forte."','"Na plenitude da felicidade, cada dia é uma vida inteira."','"As ideias das pessoas são pedaços da sua felicidade"','"As vezes o que você considera um obstáculo seja uma oportunidade"','"Se você quer chegar aonde a maioria não chega, faça aquilo que a maioria não faz"','"O sucesso é um professor traiçoeiro"','"É mais fácil ser o primeiro, do que continuar a ser o primeiro."','"Nunca se compare com ninguém neste mundo. Caso o faça, entenda que você estará insultando a si mesmo"','"Escolho uma pessoa preguiçosa pra fazer um trabalho pesado. Principalmente porque uma pessoa preguiçosa vai encontrar uma forma simples de resolver o problema"','"As pessoas sempre têm medo das mudanças. Tinham medo da eletricidade quando foi inventada"']
                 
                var fraseSort=Math.floor(Math.random()*frases.length)
                
                var fraseElement=document.createElement('h3')
                fraseElement.setAttribute('id','fraseDoDia')
                var fraseText=document.createTextNode(frases[fraseSort])
               // tmp=setInterval(fraseDoDia,1000)
                fraseElement.appendChild(fraseText)
                document.body.appendChild(fraseElement)
                
            }
            window.addEventListener('load',fraseDoDiaDigitado)
            var i=0 
            var speed=150 
            var txt='Frase do Dia'
            function fraseDoDiaDigitado(){
                if(i<txt.length){
                    window.document.getElementById('fraseDoDiaTitulo').innerHTML+= txt.charAt(i)
                    i++ 
                    setTimeout(fraseDoDiaDigitado,speed)
                }
            }
             function assign(){
                 window.location.reload()
             }

            
             function nomeDigitado(e){
                 if(e.keyCode==13){
                      var nome= window.document.getElementById('nome').value 
                 localStorage.setItem('nome',nome)
                 
                 console.log(nome)
                 }
               
             } 
             window.document.getElementById('nome').value=localStorage.getItem('nome')

            window.addEventListener('load',inputNome)
             function inputNome(){
                 if( window.document.getElementById('nome').value==''){
                     window.document.getElementById('nome').focus()
                 }

                 
               
             }
             function digitarNome(){
                 window.document.getElementById('nome').focus()
             }
             function digitarNomeTirandoOMouse(){
                 nomeDigitado()
             }
             function digaa(e){
                var nome= window.document.getElementById('nome').value 
                localStorage.setItem('nome',nome)
             }