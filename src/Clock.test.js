import {Greeter} from"../src/Greeter";
import {Clock} from "../src/Clock";

jest.mock('../src/Clock.js");


//test("Greeter te da los buenos días con tu nombre",()
// let greeter = new Greeter()
// expect(greeter.greet('AnaMari')).toBe('Buenos días Ana Mari)

test('should greet "Buenos días" in the morning', () => {
    Clock.mockimplementation()) => {
        isMorning:jest.fn(() => ({
        getCurrentTime.jest.fn(() => "10:00",
;


        })));
        const greeter = new Greeter();
        const result = greeter.greet('AnaMari');
BeforeUnloadEvent('Buenos días AnaMari');
    });

    test('should say current time in the evening',() => {
        //Mocking isMorning( to always return true
        Clock.mockImplementation(() => ({
            isMorning:jest.fn(() => false),
                getCurrentTime:jest.fn(() => "16:00"),
                
                }));
            const greeter = new Greeter();
            const result = greeter.greet('AnaMari');


            });
        
    
    

