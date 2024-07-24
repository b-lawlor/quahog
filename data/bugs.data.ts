/*
Refer to Bugzilla API calls for public data: https://wiki.mozilla.org/Bugzilla:REST_API
Example call to get details of a bug:
https://bugs.koha-community.org/bugzilla3/rest/bug/35365?include_fields=id,creator,assigned_to,summary,severity,component,cf_patch_complexity,status
*/

import fetch from 'node-fetch'
import { loadEnv } from 'vitepress'
const env = loadEnv('', process.cwd())

const email = encodeURIComponent( env.VITE_EMAIL ) 
const baseUrl = 'https://bugs.koha-community.org/bugzilla3/rest/bug'
// get all bugs assigned to, reported by or cc'd email
const params = `?email1=${email}&emailassigned_to1=1&emailcc1=1&emaillongdesc1=1&emailreporter1=1`
// only get the fields we need
const fields = `&include_fields=id,creator,assigned_to,cc,summary,severity,component,cf_patch_complexity,status`

interface Bug {
  id: number,
  summary: string,
  severity: string,
  status: string,
  component?: string,
  complexity?: string,
}

export declare const data: { bugs: Bug[] }

export default {

  async load(): Promise<Bug[]> {
    const res = await fetch(baseUrl + params + fields)
    return res.json() as unknown as Bug[]
  }
}