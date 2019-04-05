angular.module('kanbanApp',[])//CREAR MODULO E IR A NOMBRAR NUESTRA APP
    .controller('kanbanController',function($scope){ //CREAR CONTROLADOR //ESTA VARIABLE ES PARA MANDAR DATOS DEL HTML Y USARLOS EN CONTROLADOR
        var kanbanCtrl = this; //HACER REFENCIA AL CONTROLADOR
        kanbanCtrl.demo = "one";

        kanbanCtrl.show = function(){
            console.log($scope.demoview);
        }

        kanbanCtrl.tasks = [];

        var index = 1;

        kanbanCtrl.addTask = function(){
            var taskTemp = {index: index,
                            name: $scope.newObj.name,
                            desc: $scope.newObj.desc,
                            status: 1}

            kanbanCtrl.tasks.push(taskTemp);
            index++;                            
            $scope.newObj = {};
            console.log(taskTemp); //IMPRIMIR EL VALOR ACTUAL DEL ARREGLO
        }

        kanbanCtrl.next = function(task){
            task.status = (task.status)+1;
        }

        kanbanCtrl.previous = function(task){
            task.status = (task.status)-1;
        }


}); 

//$scope sirve para que a travez de el se puede acceder a un elemento SOLO del HTML. SOLO CON VARIABLES -> VOLATILES
// Y PARA ACCEDER DEL CONTROLADOR (JS) ES CON UNA INSTANCIA DEL CONTROLADOR var kanbanCtrl = this;