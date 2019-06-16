// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    get distance(){
        return Math.sqrt(this.xcoordinate*this.xcoordinate+this.ycoordinate*this.ycoordinate);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor (x=0,y=0,z=0){
        super(x,y);
        this.z=z;
    }
    distance(){
        return Math.sqrt(this.xcoordinate*this.xcoordinate+this.ycoordinate*this.ycoordinate+this.zcoordinate*this.zcoordinate);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.mass=[];
    }
    push(a){
        this.mass.push(a);
    }
    pop(){
        return this.mass.shift();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
