import Login_component from "@/components/Login_component";


describe('Prueba 2', ()=>{
    it('should create', ()=>{
        expect(Login_component.data()).toStrictEqual({
            "usuario": {
                "email": "yoquese2@gmail.com", 
                "password": "potasio123"
            }
        });
    })
})