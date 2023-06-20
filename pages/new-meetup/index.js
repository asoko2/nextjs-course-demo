// our-domain.com/new-meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetupPage() {
    const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        console.log(data)

        router.replace('/')
    }

    return <Fragment>
        <Head>
            <title>Add new meetup | React Meetups</title>
            <meta
                name='description'
                content='Add your own meetups and create an amazing networking oppotunities'
            />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
}

export default NewMeetupPage