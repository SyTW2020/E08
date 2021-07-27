<template>
 <div class = 'register'>
     <form action="">
         <b-row>
             <b-cols cols='12'>
                <label for="input-user">Usuario</label>
                 <b-form-input type=number v-model="user" :state="valida"> </b-form-input>
                <label for="input-nombre">Nombre</label>
                 <b-form-input type=number v-model="nombre" :state="valida"> </b-form-input>
                <label for="input-address">Direccion</label>
                 <b-form-input type=text v-model="addres" :state="valida"> </b-form-input>
                <label for="input-poblacion">Población</label>
                 <b-form-input type=text v-model="poblacion" :state="valida"> </b-form-input>
                 <label for="input-codigo-postal">Codigo Postal</label>
                 <b-form-input type=number v-model="codigo"  :state="valida"> </b-form-input>
                 <label for="input-fehca-nacimiento">Fecha de Nacimiento</label>
                     <b-form-datepicker  id="datepicker-dateformat2" 
                     :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                     locale="es">
                     </b-form-datepicker>
             </b-cols>
         </b-row>
     </form>

 </div>
</template>

<script>

export default {
    name: 'Register',
    data(){
        return{
            codigo: '',

        }
    },
    computed:{
        valida(){
            return 
                this.codigo.length === 5 ? true : false,
                this.user.length > 4 ? true : false

        }
    }
     
}
</script>
