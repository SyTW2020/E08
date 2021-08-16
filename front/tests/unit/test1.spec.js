import Login_component from "@/components/Login_component";


describe('Prueba 1', ()=>{
    it('should create', ()=>{
        // usuario:{ 
        //     email: 'test';
        //     password: 'test'
        // }
        expect(Login_component.data()).toStrictEqual({
            "usuario": {
                "email": "yoquese2@gmail.com", 
                "password": "potasio123"
            }
        });
    })
})