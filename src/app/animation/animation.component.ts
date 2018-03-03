import { Component, OnInit,
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes,
        group
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    /*trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
     // transition('off <=> on', [animate('2s', style({transform: 'rotate(90deg)'}))]),
      transition('off => on', [animate('2000ms 2s ease-in', style({transform: 'rotate(90deg)'}))]),
      transition('on => off', [animate('2s ease-out', style({transform: 'rotate(- 90deg)'}))]),
    ]) */
    trigger('groupTrigger',[
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', group([
        animate('4s ease-in', style({
          transform: 'rotate(90deg)',
        })),
        animate('2s ease-out', style({
          width: '50px'
        }))
      ])),
      transition('on => off', group([
        animate('3s 1s ease-in', style({
          transform: 'rotate(360deg)',
        })),
        animate('2s ease-in', style({
          opacity: 0
        }))
      ]))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  title = 'Angular Animations';
  roomState: string = "off";
  constructor() { }

  ngOnInit() {
  }
  toggleLights(){
    this.roomState = (this.roomState === "off") ? "on" : "off";
  }
  animationStarted(event: any){
    console.log('Animation started');
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
  }
  animationDone(event: any){
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('Animation Done');
  }
}
