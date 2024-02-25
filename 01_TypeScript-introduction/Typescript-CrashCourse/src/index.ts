//basics types
let id: number = 5;
let company: string = 'WD';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello'];

// Tuples
let person: [number, string, boolean] = [1, 'niki', true];

// Tuple array
let employee: [number, string][]

employee = [
    [1, 'Niki'],
    [2, 'Ivka'],
    [3, 'Hailey'],
]

//  Union
let pid: string | number

pid = 29

// enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'Heilun'
}

// Type Assertion

let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

// void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'Heilun'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}

// Classes
class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} has now registered`
    }
}

const hailey = new Person(1, 'Hailey');
const zoro = new Person(2, 'Zoro');

// Subclasses
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position
    }
}

const emp = new Employee(1, 'Ivka', 'Data Scientist')

console.log(emp.register());

// Generics - reusable

function getArr<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArr<number>([1, 2, 3, 4]);
let strArray = getArr<string>(['Ivka', 'Niki', 'Hailey'])
