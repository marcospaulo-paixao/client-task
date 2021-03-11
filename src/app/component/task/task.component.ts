import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  i: number  = 1
  panelOpenState = false;
   constructor() { }

   ngOnInit(): void {
   }

   openInput(text){
    alert(text)
   }

   addTask(id){
     if(id == 1){
       this.todo.push('teste ' + this.i)
       this.i++
       return
      }
      this.done.push('teste ' + this.i)
      this.i++
   }

   todo = [
     'Get to work',
     'Pick up groceries',
     'Go home',
     'Fall asleep'
   ];

   done = [
     'Get up',
     'Brush teeth',
     'Take a shower',
     'Check e-mail',
     'Walk dog'
   ];

   drop(event: CdkDragDrop<string[]>) {
     if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     } else {
       transferArrayItem(event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex);
     }
   }
  }
  

