import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterial } from './angular.material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        AppMaterial,
        BrowserAnimationsModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'actividad27'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('actividad27');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('actividad27 is running!');
  });
  it('testing the function , calcular(SelectValue ,valor1 ,valor2)',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const TestData={valor1:5 , valor2:2 , case:"suma"}
    const expectResult = 7;
    
    const result = app.calcular(TestData.case , TestData.valor1 , TestData.valor2)
 
    expect(result).toEqual(expectResult);
  });

  it('testing the function , calcular(SelectValue ,valor1 ,valor2)',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const TestData={valor1:5 , valor2:2 , case:"resta"}
    const expectResult = 3;
    
    const result = app.calcular(TestData.case , TestData.valor1 , TestData.valor2)
 
    expect(result).toEqual(expectResult);
  });

  it('testing the function , calcular(SelectValue ,valor1 ,valor2)',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const TestData={valor1:5 , valor2:2 , case:"multip"}
    const expectResult = 10;
    
    const result = app.calcular(TestData.case , TestData.valor1 , TestData.valor2)
 
    expect(result).toEqual(expectResult);
  });

  it('testing the function, calcular(SelectValue ,valor1 ,valor2)',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const TestData={valor1:5 , valor2:2 , case:"Division"}
    const expectResult = 2.5;
    
    const result = app.calcular(TestData.case , TestData.valor1 , TestData.valor2)
 
    expect(result).toEqual(expectResult);
  });
});
