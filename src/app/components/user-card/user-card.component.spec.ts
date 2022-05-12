import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/User.model';
import { Nationality } from 'src/app/utils/Nationality.enum';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let testUser: User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    testUser = {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'test',
        last: 'smith',
      },
      location: {
        country: 'Australia',
        city: 'Sidney',
        state: 'Sidney',
        street: {
          name: 'street',
          number: 1,
        },
        postcode: 0,
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
        timezone: {
          offset: 10,
          description: 'utc',
        },
      },
      email: 'testemail',
      dob: {
        date: new Date('5/5/5'),
        age: 20,
      },
      registered: {
        date: new Date('12/12/12'),
        age: 12,
      },
      phone: '2222',
      cell: '111',
      picture: {
        large: 'img',
        medium: 'img',
        thumbnail: 'img'
      },
      login: {
        uuid: '',
        username: '',
        password: '',
        salt: '',
        md5: '',
        sha1: '',
        sha256: '',
      },
      id: {
        name: 'UUID',
        value: '123',
      },
      nat: Nationality.AU,
    }
    component.user = testUser;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render user info correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#name').textContent).toContain('test smith');
    expect(compiled.querySelector('#gender').textContent).toContain('Male');
    expect(compiled.querySelector('#age').textContent).toContain('Age: 20');
    expect(compiled.querySelector('#since').textContent).toContain('Since: Dec 12, 2012');
    expect(compiled.querySelector('.user-card__image').src).toContain('img');;
    expect(compiled.querySelector('#location').textContent).toContain('Location: Australia, Sidney, Sidney');
    expect(compiled.querySelector('#phone').textContent).toContain('111');
    expect(compiled.querySelector('#email').textContent).toContain('testemail');
  });
});
