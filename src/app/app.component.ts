import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { DefaultUnoGames } from './utilities/games.defaults';
import { Helper } from './utilities/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MessageService],
  animations: [
    trigger("animation", [
      state(
        "visible",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      transition("void => *", [
        style({ transform: "translateX(50%)", opacity: 0 }),
        animate("300ms ease-out")
      ]),
      transition("* => void", [
        animate(
          "250ms ease-in",
          style({
            height: 0,
            opacity: 0,
            transform: "translateX(50%)"
          })
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  public title: string = 'UNO Scoring'
  public items: MenuItem[]

  constructor(private primengConfig: PrimeNGConfig, private defaults: DefaultUnoGames, public messageService: MessageService, public helper: Helper) {
    this.primengConfig.ripple = true
    this.defaults.defaults_run()
    this.items = []
  }

  ngOnInit() {
    this.items = this.menuLoad()
  }

  private menuLoad(): MenuItem[] {
    let menu: MenuItem[] = []
    // INFO: Home
    menu.push({
      label: 'Home',
      icon: 'pi pi-home',
      command: () => this.helper.goTo('/home')
    })
    // INFO: Games
    menu.push({
      label: 'Games',
      icon: 'pi pi-server',
      command: () => this.helper.goTo('/games')
    })
    // INFO: People
    menu.push({
      label: 'Players',
      icon: 'pi pi-users',
      command: () => this.helper.goTo('/players')
    })
    // INFO: Settings
    menu.push({
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => this.helper.goTo('/settings')
    })
    return menu
  }
}
