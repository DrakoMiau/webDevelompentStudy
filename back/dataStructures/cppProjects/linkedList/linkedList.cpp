#include <algorithm>
#include <cstdio>
#include <functional>
#include <iostream>
#include <ostream>

// Clase Nodo

class Node {
private:
  Node *next;
  int data;

public:
  // Constructores

  Node(int data) {
    this->next = nullptr;
    this->data = data;
  }

  // getters y setters (encapsulamiento)
  int getData() { return this->data; }

  void setData(int data) { this->data = data; }

  Node *getNext() { return this->next; }

  void setNext(Node *next) { this->next = next; }
};

class LinkedList {
private:
  // Atributos
  Node *head = nullptr;

public:
  // Constructores
  LinkedList() { this->head = nullptr; }

  // Metodos

  void printList() {
    Node *ptr = this->head;
    if (ptr == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
    } else {
      // el else es porque si ptr es nulo, no
      while (ptr != nullptr) {
        std::cout << ptr->getData() << std::endl;
        ptr = ptr->getNext();
      }
    }
  }

  void pushBack(int n) {
    Node *ptr = this->head;
    Node *newNode = new Node(
        n); // si solo declaro Node newnode, tengo el problema de que es una
            // variable local y muere cuando se termine la funcion
    if (this->head == nullptr) {
      this->head = newNode;
    } else {
      while (ptr->getNext() != nullptr) {
        ptr = ptr->getNext();
      }
      ptr->setNext(newNode);
    }
  }

  void pushFront(int n) {
    Node *newNode = new Node(n);
    if (this->head == nullptr) {
      this->head = newNode;
    } else {
      newNode->setNext(this->head);
      this->head = newNode;
    }
  }

  Node *popFront() {
    if (this->head == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
      return nullptr;
    } else {
      this->head = this->head->getNext();
      return head;
    }
  }

  Node *popBack() {
    Node *ptr = this->head;
    Node *prev = ptr;
    if (this->head == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
      return nullptr;
    } else {
      while (ptr->getNext() != nullptr) {
        prev = ptr;
        ptr = ptr->getNext();
      }
      prev->setNext(nullptr);
      return ptr;
    }
  }

  Node *topFront() {
    if (this->head == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
    }
    return head;
  }

  Node *topBack() {
    Node *ptr;
    if (this->head == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
      return head;
    } else {
      while (ptr->getNext() != nullptr) {
        ptr = ptr->getNext();
      }
      return ptr;
    }
  }

  bool Find(int key) {
    Node *ptr = this->head;
    bool isIn = false;
    while (ptr != nullptr) {
      ptr = ptr->getNext();
      if (ptr->getData() == key) {
        isIn = true;
      }
    }
    return isIn;
  }

  bool isEmpty() {
    if (this->head != nullptr) {
      return true;
    } else {
      return false;
    }
  }

  // Los siguientes metodos son para el primer dato que coincida
/*
  void addBefore(int value, int key) {
    Node *ptr;
    Node *prev = ptr;
    Node *newNode = new Node(key);
    while (ptr->getData() != value || ptr != nullptr) { // busco el dato
      prev = ptr;
      ptr = ptr->getNext();
    }
    if (ptr == nullptr) {
      
    }
  }
  void addAfter(int key) {}
  void erase(int key) {}*/
};


void cambiarValor(int* x){
  *x = 10;
}

void cambiarArreglo(int *myArr){
  myArr[1] = 300;
}

void saludar(){
  std::cout<<"Hola mundo"<<std::endl;
}

void reciboFuncion(std::function<void()>callback){
  callback();
}

int main() {
  int arr[10] = {10,20,30,40,50,60,70,80,90,100};
  cambiarArreglo(arr);
  std::cout<<arr[1]<<std::endl; 
  //std::cout<<sizeof(arr)/sizeof(arr[0])<<std::endl; //cada elemento mide 4 bytes
  int x = 20;
  cambiarValor(&x);
  std::cout<<x<<std::endl;
  reciboFuncion(saludar); //callback
  /*LinkedList myList;
  std::cout << myList.isEmpty() << std::endl;
  int n;
  std::cout << "Ingrese un numero entero: ";
  std::cin >> n;
  std::cout << std::endl;
  myList.pushFront(n);
  std::cout << "Ingrese un numero entero: ";
  std::cin >> n;
  std::cout << std::endl;
  myList.pushFront(n);
  std::cout << "Ingrese un numero entero: ";
  std::cin >> n;
  std::cout << std::endl;
  myList.pushFront(n);
  myList.printList();
  myList.popBack();
  myList.printList();
  std::cout << "Veamos si la lista esta vacia: " << myList.isEmpty()
            << std::endl;*/

  return 0;
}
