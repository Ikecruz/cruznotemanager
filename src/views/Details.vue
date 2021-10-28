<template>
    <Hero :placeholder="note.title" />
    
    <section class="my-3">
        <div class="container">
            <div class="row m-0">
                <div class="col-md-8">
                    <p class="mb-2 lil-enhanced-text">{{ note.body }}</p>
                    <p class="date mt-4">{{ note.date }}</p>
                </div>
                <div class="col-md-4">
                    <div class="actions-contain d-flex">
                        <button class="cus-btn btn-danger shadow-sm p-1 text-center rounded-1" @click="deleteNote"><i class="fal fa-trash"></i>&nbsp; Delete</button>
                        <button class="cus-btn btn-dark shadow-sm p-1 text-center rounded-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-pen-nib"></i> &nbsp; Edit</button>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form @submit.prevent="editnote">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Title</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" v-model="title">
                            </div>
                            <div class="mb-3">
                                <label for="examplenote" class="form-label">Note</label>
                                <textarea class="form-control" id="examplenote" rows="5" v-model="body"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-dark">Save Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Hero from "@/components/Hero.vue";
import { getNotes, addNotes } from "@/exports/data.js";
import { getDate, previewText, sweetToast } from "@/exports/functions.js";

export default {
    name: "Details",
    components: {
        Hero
    },
    data() {
        return {
            id: this.$route.params.id,
            notes: [],
            note: {},
            title: "",
            body: "",
        }
    },
    methods: {
        getNote() {
            this.notes = getNotes();
            this.note = this.notes.filter(r => r.id == this.id)
            this.note = this.note[0]
        },
        populate() {
            this.title = this.note.title;
            this.body = this.note.body;
        },
        editnote(){

            if (this.title && this.body) {
                // Update note
                this.note.title = this.title;
                this.note.body = this.body;
                this.note.date = getDate();
                this.note.preview = previewText(this.body)
            
                //Delete previous version of note
                this.notes = this.notes.filter(r => r.id !== this.id)

                // Push new version of note to notes
                this.notes.push(this.note)

                // Push to storage
                let success = addNotes(this.notes)

                success ? sweetToast("success", "Note Updated") : sweetToast("error", "Note wasn't Updated");

                this.getNote();
            } else {
                sweetToast("error", "Note is empty")
            }

        },
        deleteNote(){
            this.notes = this.notes.filter(r => r.id !== this.id);
            addNotes(this.notes)
            this.$router.push('/')
        }
    },
    mounted() {
        this.getNote();
        this.populate();
    },
    watch: {
        note(){
            this.populate()
        }
    }
}
</script>

<style scoped>
.date{
    font-weight: 900;
}

.cus-btn{
    flex: 1;
    margin: 0px 20px;
    height: 40px;
    border: none;
}

.cus-btn i{
    color: white !important;
}
</style>