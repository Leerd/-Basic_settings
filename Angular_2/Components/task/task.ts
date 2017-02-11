import { Component } from '@angular/core';
import { Task } from '../../Essence/task'

@Component({
    selector: 'task',
    template: require('./task.html'),
    style: [require('./task.css')]
})

export class TaskComp {
     private Tasks: Task[] = []
}