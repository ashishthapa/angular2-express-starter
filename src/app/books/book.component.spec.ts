/**
 * Created by athapa on 16/08/2017.
 */
import {BookComponent} from "./book.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";




describe('Book Component',()=> {
  let fixture:ComponentFixture<BookComponent>;
  let component:BookComponent

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[
        BookComponent
      ],
      imports:[
        RouterTestingModule,
        StoreModule.provideStore({})
      ]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should say the component is created', ()=>{
    expect(component).toBeTruthy();
  })
})
