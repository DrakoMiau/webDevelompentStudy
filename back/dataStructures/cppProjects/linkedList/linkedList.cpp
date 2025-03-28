#include <cstdio>
#include <iostream>

// Clase Nodo

class Node {
private:
  Node *next;
  int data;

public:
  // Constructores

  Node() {
    this->next = nullptr;
  }

  Node(int data) { this->data = data; }

  // getters y setters (encapsulamiento)
  int getData() { return this->data; }

  void setData(int data) { this->data = data; }

  Node *getNext() { return this->next; }

  void setNext(Node *next) { this->next = next; }
};

class LinkedList {

  // Atributos
  Node *head;

public:
  // Constructores
  LinkedList() {
    this->head = nullptr;
  }

  // Metodos
  void printList() {
    Node *ptr = this->head;
    if (ptr == nullptr) {
      std::cout << "La lista esta vacia" << std::endl;
    } else {
      // el else es porque si ptr es nulo, no 
      while (ptr->getNext() != nullptr) {
        std::cout << ptr->getData() << std::endl;
      }
    }
  }
  void pushBack(int n) {
    Node *ptr = this->head;
    Node *newNode = new Node(n);
    if (this->head == nullptr) {
      this->head->setData(n);
    } else {
      while (ptr->getNext() != nullptr) {
        ptr = ptr->getNext();
      }
      ptr->setNext(newNode);
    }
  }
  void pushFront(int n) {}
  void pop(int n) {}
};

int main() {
  int n;
  std::cout << "Ingrese un numero entero: ";
  std::cin >> n;
  LinkedList myList;
  myList.pushBack(n);
  myList.printList();
  return 0;
}
