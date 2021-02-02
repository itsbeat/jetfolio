<template>
	<v-app id="multistep">
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm6>
						<v-card id="steps" class="animated fadeIn">

							<!-- Stepper Header -->
							<v-stepper v-model="step">
								<v-stepper-header>
									<v-stepper-step :complete="step > 1" step="1" color="teal accent-4">Details</v-stepper-step>
									<v-divider></v-divider>
									<v-stepper-step :complete="step > 2" step="2" color="teal accent-4">Attributes</v-stepper-step>
									<v-divider></v-divider>
									<v-stepper-step :complete="step > 3" step="3" color="teal accent-4">Health</v-stepper-step>
									<v-divider></v-divider>
									<v-stepper-step :complete="submitted" step="4" color="teal accent-4">Result</v-stepper-step>
								</v-stepper-header>
							</v-stepper>

							<!-- Toolbar -->
							<v-toolbar class="teal accent-2">
								<v-toolbar-title v-if="step === 1">
									<h3>Personal Details</h3>
								</v-toolbar-title>
								<v-toolbar-title v-if="step === 2">
									<h3>Attributes</h3>
								</v-toolbar-title>
								<v-toolbar-title v-if="step === 3">
									<h3>Health</h3>
								</v-toolbar-title>
								<v-toolbar-title v-if="step === 4">
									<h3>Result</h3>
								</v-toolbar-title>
							</v-toolbar>

							<v-card-text>
								<v-form>

									<!-- Step 1: Details -->
									<div v-if="step === 1" class="animated fadeIn">
										<v-layout row wrap>
											<v-flex xs12 sm6 pa-2>
												<v-text-field prepend-icon="fa-user" id="fname" name="first name" label="First Name" type="text" color="grey darken-4" v-model="details.fname" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('fname') }"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 pa-2>
												<v-text-field prepend-icon="fa-user" id="lname" name="last name" label="Last Name" type="text" color="grey darken-4" v-model="details.lname" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('lname') }"></v-text-field>
											</v-flex>
										</v-layout>
										<v-layout row wrap>
											<v-flex xs12 sm6 pa-2>
												<v-select prepend-icon="fa-globe" id="country" name="country" v-model="details.country" :items="countries" label="Country" auto="true" max-width="290px" clearable></v-select>
											</v-flex>
											<v-flex xs12 sm6 pa-2>
												<v-dialog ref="dialog" v-model="details.modal" :return-value.sync="details.dob" persistent lazy full-width width="290px">
													<v-text-field slot="activator" v-model="details.dob" label="Date of Birth" prepend-icon="event" readonly></v-text-field>
													<v-date-picker v-model="details.dob" type="date" scrollable color="grey darken-4" dark>
														<v-spacer></v-spacer>
														<v-btn color="teal accent-4" @click="details.modal = false">Cancel</v-btn>
														<v-btn color="teal accent-4" @click="$refs.dialog.save(details.dob)">OK</v-btn>
													</v-date-picker>
												</v-dialog>
											</v-flex>
										</v-layout>
									</div>

									<!-- Step 2: Attributes -->
									<div v-if="step === 2" class="animated fadeIn">
										<v-layout row wrap>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Height (cm)</v-subheader>
												<v-slider name="height" prepend-icon="fa-ruler-vertical" v-model="attributes.height" :thumb-size="24" thumb-label="always" min="120" max="220" color="grey darken-4"></v-slider>
											</v-flex>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Weight (kg)</v-subheader>
												<v-slider name="weight" prepend-icon="fa-weight" v-model="attributes.weight" :thumb-size="24" thumb-label="always" min="40" max="120" color="grey darken-4"></v-slider>
											</v-flex>
										</v-layout>
										<v-layout row wrap>
											<v-flex xs12 sm4 pa-2>
												<v-subheader>Strength</v-subheader>
												<v-slider name="strength" prepend-icon="fa-dumbbell" v-model="attributes.strength" :thumb-size="24" ticks="always" thumb-label="always" min="1" max="10" color="grey darken-4"></v-slider>
											</v-flex>
											<v-flex xs12 sm4 pa-2>
												<v-subheader>Speed</v-subheader>
												<v-slider name="speed" prepend-icon="fa-tachometer-alt" v-model="attributes.speed" :thumb-size="24" ticks="always" thumb-label="always" min="1" max="10" color="grey darken-4"></v-slider>
											</v-flex>
											<v-flex xs12 sm4 pa-2>
												<v-subheader>Endurance</v-subheader>
												<v-slider name="endurance" prepend-icon="fa-stopwatch" v-model="attributes.endurance" :thumb-size="24" ticks="always" thumb-label="always" min="1" max="10" color="grey darken-4"></v-slider>
											</v-flex>
										</v-layout>
									</div>

									<!-- Step 3: Health -->
									<div v-if="step === 3" class="animated fadeIn">
										<v-layout row wrap>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Heartrate (bpm)</v-subheader>
												<v-slider name="heartrate" prepend-icon="fa-heartbeat" v-model="health.heartrate" :thumb-size="24" thumb-label="always" min="40" max="160" color="grey darken-4"></v-slider>
											</v-flex>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Daily Activity (hours)</v-subheader>
												<v-slider name="activity" prepend-icon="fa-walking" v-model="health.activity" :thumb-size="24" thumb-label="always" min="0" max="18" color="grey darken-4"></v-slider>
											</v-flex>
										</v-layout>
										<v-layout row wrap>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Averge Sleep</v-subheader>
												<v-slider name="sleep" prepend-icon="fa-bed" v-model="health.sleep" :thumb-size="24" thumb-label="always" min="0" max="18" color="grey darken-4"></v-slider>
											</v-flex>
											<v-flex xs12 sm6 pa-2>
												<v-subheader>Smoker Status</v-subheader>
												<v-radio-group name="smoker status" prepend-icon="fa-smoking" v-model="health.smoker" color="grey darken-4" row>
													<v-radio label="Yes" value="yes"></v-radio>
													<v-radio label="No" value="no"></v-radio>
												</v-radio-group>
											</v-flex>
										</v-layout>
									</div>

									<!-- Step 4: Result-->
									<div v-if="step === 4" class="animated fadeIn">
										<v-layout justify-center>
											<h1 class="centered"><i class="fa fa-vial"></i> Get your results...</h1>
										</v-layout>
										<v-text-field prepend-icon="fa-envelope" v-model="email" name="email" label="Email" type="text" color="grey darken-4" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"></v-text-field>
									</div>

								</v-form>
							</v-card-text>

							<!-- Actions: Previous, Next, Submit -->
							<v-card-actions>
								<v-layout justify-center>
									<v-btn class="teal accent-2" @click.prevent="prev()" v-if="step > 1">Prev</v-btn>
									<v-btn class="teal accent-2" @click.prevent="next()" v-if="step < 4">Next</v-btn>
									<v-btn dark class="teal accent-5" type="submit" v-if="step === 4" @click.prevent="validateBeforeSubmit()">Submit</v-btn>
								</v-layout>
							</v-card-actions>

						</v-card>

						<!-- Success & Error Messages -->
						<v-alert v-show="submitted" type="success" color="teal accent-5" outline>
							{{message}}
						</v-alert>
						<v-alert v-show="errors.has('first name')" type="error" outline>
							{{ errors.first('first name') }}
						</v-alert>
						<v-alert v-show="errors.has('last name')" type="error" outline>
							{{ errors.first('last name') }}
						</v-alert>
						<v-alert v-show="errors.has('email')" type="error" outline>
							{{ errors.first('email') }}
						</v-alert>

					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>

    export default {
        data: () => ({
        step: 1,
        errors: null ,
		details: {
			fname: null,
			lname: null,
			country: null,
			dob: null,
			modal: false,
			picker: null
		},
        attributes: {
			height: 170,
			weight: 80,
			strength: 5,
			speed: 5,
			endurance: 5
		},
		health: {
			heartrate: 100,
			activity: 9,
			sleep: 9,
			smoker: null
		},
		email: null,
		submitted: false,
		message: null
	}),
	methods: {
		prev() {
			this.step--;
			this.submitted = false;
		},
		next() {
			if (
				this.details.fname === null ||
				this.details.lname === null ||
				this.errors.items.length > 0
			) {
				return false;
			} else {
				this.step++;
				this.submitted = false;
			}
		},
		validateBeforeSubmit() {
			this.$validator.validateAll().then(result => {
				if (result) {
					this.message = "Submission completed.";
					this.submitted = true;
					return;
				}
			});
		}
	}
}
</script>