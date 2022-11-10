import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
	public sidenav!: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}

	public open() {
		return this.sidenav.open();
	}

	public close() {
		return this.sidenav.close();
	}

	public toggle() {
		this.sidenav.toggle();
	}
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// @Injectable()
// export class SidenavService {
//  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

//   constructor() { } 
 

//   public toggle() {
//     return this.sideNavToggleSubject.next(null);
//   } 
// }
