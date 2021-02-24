/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { OneService } from './one.service';

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let oneServiceSpy: any;
  let actualResult: any;
  let mockService;

  beforeEach(() => {
    mockService = {
      get a() {
        return 'a';
      },
    };
    Object.defineProperty(mockService, 'myGetter', {
      get() {
        return 'bla';
      },
      set(_) {},
      configurable: true,
    });
    TestBed.configureTestingModule({
      providers: [AppComponent, { provide: OneService, useValue: mockService }],
    });

    componentUnderTest = TestBed.inject(AppComponent);
    oneServiceSpy = TestBed.inject<any>(OneService);

    actualResult = undefined;
  });

  it('test getter', () => {
    actualResult = componentUnderTest.testGetter();
    const expectedResult = mockService.myGetter;

    expect(actualResult).toEqual(expectedResult);
  });
});
