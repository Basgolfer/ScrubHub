import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {UserComponent} from './Components/user/user.component';
import {PostToActiveChatComponent} from './Components/post-to-active-chat/post-to-active-chat.component';
import {ActiveChatComponent} from './Components/active-chat/active-chat.component';
import {ActiveUsersComponent} from './Components/active-users/active-users.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveUsersComponent,
        ActiveChatComponent,
        PostToActiveChatComponent,
        UserComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
