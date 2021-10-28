<template>
    <section>
        <div class="container mt-4">
            <div class="d-flex justify-content-center justify-content-md-end">
                <input type="text" class="cus-input" placeholder="Search title" v-model="searchStr">
                <div class="create-btn-contain ms-4 px-0 border">
                    <button class="cus-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-pen-nib"></i></button>
                </div>
            </div>
        </div>
    </section>

    <section class="my-3 min-h">
        <div class="container">
            <p class="enhanced-text px-2">All Notes</p>
            <div class="row m-0 mt-4" v-if="searchedNote.length >= 1">
                <div class="col-md-4 p-2" v-for="note in searchedNote" :key="note.id">
                    <router-link :to="{name: 'Details', params: {id: note.id}}">
                        <div class="cus-card p-4">
                            <h3 class="mb-2">{{note.title}}</h3>
                            <p class="mb-2">{{ note.preview }}</p>
                            <p class="date mb-1">{{note.date }}</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="empty d-flex justify-content-center align-items-center" v-else>
                <div class="text-center">
                    <i class="fal fa-exclamation-circle"></i>
                    <p class="enhanced-text mt-4">No note(s) found</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form @submit.prevent="savenote">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create Note</h5>
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
</template>

<script>
import {getNotes, addNotes} from '@/exports/data.js'
import {generateNumber, getDate, previewText, sweetToast} from '@/exports/functions.js'


export default {
    name: "Write",
    data: () => {
        return {
            title: "",
            body: "",
            searchStr: "",
            notes: [],
            singlenote: {}
        }
    },
    methods: {
        savenote() {
            this.singlenote.id = generateNumber(5);
            this.singlenote.title = this.title;
            this.singlenote.body = this.body;
            this.singlenote.date = getDate();
            this.singlenote.preview = previewText(this.body)

            if (this.singlenote.title && this.singlenote.body) {
                
                // Push to notes array
                this.notes.push(this.singlenote);
                let success =  addNotes(this.notes);

                success ? sweetToast("success", "Note added") : sweetToast("error", "Note wasn't added");

                // reset singlenote
                this.singlenote = {}

                // reset the input field
                this.title = '';
                this.body = '';
            } else {
                sweetToast("error", "Note is empty")
            }
        },
    },
    computed: {
        searchedNote(){
            return this.notes.filter(r => r.title.toLowerCase().includes(this.searchStr.toLowerCase()))
        }
    },
    mounted() {
        this.notes = getNotes();
        console.log(this.notes)
    }
}
</script>

<style scoped>
.cus-input{
    width: 300px;
    height: 50px;
    outline: none;
    padding: 7px;
    border: 1px solid #e0e0e0;
}

a, a:hover{
    color: black;
    font-weight: 400;
}

.create-btn-contain{
    padding: 0 0 0 10px;
    width:50px;
    height: 50px;
    background: white;
}

.create-btn-contain .cus-btn{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: black;
}

.cus-card{
    border: 1px solid #e0e0e0;
    background: white;
    min-height: 200px;
}

.cus-card .date{
    font-weight: 900;
}

.min-h{
    min-height: 500px;
}

.empty{
    width: 100%;
    height: 500px;
}

.empty i{
    font-size: 5em;
}
</style>