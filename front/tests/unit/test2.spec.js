import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login_component";
import Register from "@/components/Register_component";


describe.skip('Prueba 2', () => {
    const wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Register, {
            methods: { signup: () => { } },
            data() {
                return {
                    registro_datos: {
                        username: "",
                        nombre: "",
                        apellido: "",
                        email: "",
                        password: "",
                        address: "",
                        numero: null,
                        poblacio: "",
                        codigo: null
                    }
                };
            }
        });
    });
    it('should create', () => {
        expect(wrapper.exists()).toBe(true);
    });
})

describe.skip('Prueba 3', () => {
    const wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Login, {
            methods: { login: () => { } },
            data() {
                return {
                    usuario: {
                        email: 'prueba9@gmail.com',
                        password: 'prueba9'
                    }
                }
            }
        });
    });
    it('should create', () => {
        expect(wrapper.exists()).toBe(true);
    });
})