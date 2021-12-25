import type { Request } from "@sveltejs/kit"
import type { RequestHandler } from "@sveltejs/kit"
import { spawn } from "child_process"

let output = ``

function makeSystemCall() {
    const systemCall = spawn(`ls`, [`-al`])

    systemCall.stdout.on(`data`, (data) => {
        output += data
        console.log(`stdout: ${data}`)
    })

    systemCall.stderr.on(`data`, (data) => {
        console.error(`stderr: ${data}`)
    })

    systemCall.on(`close`, (code) => {
        console.log(`child process exited with code ${code}`)
    })
}

// you get a 404 without this request handler
export const get: RequestHandler = (request) => {
    return api(request)
}

// api 
export const api = (request: Request) => {
    let body = {}
    let status = 500

    switch (request.method.toUpperCase()) {
        case "GET":
            makeSystemCall()
            body = output
            status = 200
            break
        default:
            break
    }
    return {
        status,
        body,
    }
}




