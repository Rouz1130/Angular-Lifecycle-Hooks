# Lifecycle-Hooks
This is a tutorial to help a novice to Angular understand the implementaion of life cycle hooks in Angular. Life cycle hooks are methods that angular invokes on directives and components as it creates, changes, destroys them. They can fine tune behavior of components during creation, update and destruction

## What is Angular lifecycle hooks
When an Angular application starts it creates and renders the root component. Then it creates its children and renders it. For each loaded component, it checks when its data bound properties change and updates them. It destroys the component and removes it from the DOM when no longer in use. Therefore Angualar lets us know when these events happen using Life cycle hooks. 

## Angular lifecycle hooks
* ngOnChanges
* ngOnInit
* ngDoCheck
* ngAfterContentInit
* ngAfterContentChecked
* ngAfterViewInit
* ngAfterViewChecked
* ngOnDestroy

## How to Use this appliaction tutorial
1. Clone down repo
2. Run npm install
3. Run ng serve
4. Press the show/hide button and view the developer console to see the lifecycle hooks.  

## Technologies Used
Angular 5

###
July 3, 2018&nbsp; Rouz Majlessi
<br/>
www.rouzm.com
