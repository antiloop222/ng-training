import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent
      ],
      imports: [
        RouterModule.forRoot([
          {path:"home", component: HomeComponent}
        ])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }       
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MY EBAY'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MY EBAY');
  }));
//  it('should render title in a h1 tag', async(() => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.debugElement.nativeElement;
//    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//  }));
});
