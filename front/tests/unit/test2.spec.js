import { shallowMount, mount } from "@vue/test-utils";
import Login from "@/components/Login_component";
import Register from "@/components/Register";


describe('Prueba 2', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Register, {
            methods: { registrar: () => { } },
            data() {
                return {
                    form: {
                        user: "",
                        email: "",
                        pass: "",
                        nombre: "",
                        apellidos: "",
                        numero: "",
                        address: "",
                        poblacion: "",
                        codigo: "",
                        cumple: "",
                    }
                };
            }
        });
    });
    it('should create', () => {
        expect(wrapper.exists()).toBe(true);
    });
})

describe('Prueba 3', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Login, {
            methods: { login: () => { } },
            data() {
                return {
                    usuario: {
                        email: 'yoquese2@gmail.com',
                        password: 'potasio123'
                    }
                }
            }
        });
    });
    it('should create', () => {
        expect(wrapper.exists()).toBe(true);
    });
})