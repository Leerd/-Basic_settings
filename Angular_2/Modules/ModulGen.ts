import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComp } from '../Components/task/task';

@NgModule({
    declarations: [TaskComp],
    bootstrap: [TaskComp],
    imports: [BrowserModule]
})
export class ModulGen {}