import {Component} from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  appName = this.ss.getAppName();

  constructor(private ss: ServerService) {
    this.getServers();
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });

    this.ss.storeServers(this.servers)
      .subscribe(
        (response) => this.getServers(),
        (error) => console.log(error)
      );
  }

  getServers() {
    return this.ss.getServers()
      .subscribe(
        (servers: any[]) => {
          this.servers = servers;
        },
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
