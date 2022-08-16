<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="firstName.value" @blur="clearValid('firstName')"/>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="lastName.value" @blur="clearValid('lastName')"/>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea id="description" rows="4" v-model="description.value" @blur="clearValid('description')"/>
        </div>
        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model.number="rate.value" @blur="clearValid('rate')"/>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}" @blur="clearValid('areas')">
            <h3>Areas of Expertise</h3>
            <div>
                 <input type="checkbox" id="cooking" value="cooking" v-model="areas.value" @blur="clearValid('areas')"/>
                 <label for="cooking">Cooking</label>
            </div>
            <div>
                 <input type="checkbox" id="photography" value="photography" v-model="areas.value" @blur="clearValid('areas')"/>
                 <label for="photography">Photography</label>
            </div>
                        <div>
                 <input type="checkbox" id="life" value="life" v-model="areas.value" @blur="clearValid('areas')"/>
                 <label for="life">Life Coaching</label>
            </div>
            <p v-if="!formIsValid"> Please Fix Errors :(</p>
           <base-button>Register</base-button>
        </div>
    </form>
</template>

<script>
export default {
  emits: ['save-data'],
  
    data() {
        return {
            firstName: {
              value: '',
              isValid: true
            },
            lastName: {
              value: '',
              isValid: true
            },
            description: {
              value: '',
              isValid: true
            },
            rate: {
              value: null,
              isValid: true
            },
            areas: {
              value: [],
              isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        validateForm() {
          this.formIsValid = true;
          if(this.firstName.value === '') {
            this.firstName.isValid = false;
            this.formIsValid = false;
          }
          if(this.lastName.value === '') {
            this.lastName.isValid = false;
            this.formIsValid = false;
          }
          if(this.description.value === '') {
            this.description.isValid = false;
            this.formIsValid = false;
          }
          if(!this.rate.value || this.rate.val < 0) {
            this.rate.isValid = false;
            this.formIsValid = false;
          }
          if(this.areas.value.length === 0) {
            this.areas.isValid = false;
            this.formIsValid = false;
          }
        },
        clearValid(input){
          this[input].isValid = true;
        },
        submitForm() {
            this.validateForm();

            if(!this.formIsValid){
              return;
            }
            const formData = {
                first: this.firstName.value,
                last: this.lastName.value,
                desc: this.description.value,
                rate: this.rate.value,
                areas: this.areas.value
            };
            console.log(formData);
            this.$emit('save-data', formData);
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>