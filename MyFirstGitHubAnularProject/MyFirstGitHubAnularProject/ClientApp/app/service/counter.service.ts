import { Injectable, Inject } from "@angular/core";
import { DSGWXMLFile } from "../model/dsgwXMLFile.model";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//import { HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod, RequestOptionsArgs, Headers, Response } from '@angular/http';

@Injectable()

export class DSGWXMLFileService{

    baseURL: string;
    http: Http;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl;
        this.http = http;
        this.getDSGWXMLFile();
        this.updateDSGWXMLFile(new DSGWXMLFile());
    }

    getDSGWXMLFile(): DSGWXMLFile {

        //var obj = this.http.get(this.baseURL + 'api/DSGWServiceConfig/getConfiguration').map(response => response.json() as DSGWXMLFile).toPromise();
        //debugger;
        //console.log("obj", obj);
        let dSGWXMLFile = new DSGWXMLFile();
        dSGWXMLFile.appDir = "E: \\DSGW\\GW";
        dSGWXMLFile.psftpParams = "-load <session> -b <file> -be -bc -batch";
        dSGWXMLFile.logStatus = "10";
        dSGWXMLFile.logFile = "E:\\DSGW\\Log\\Gateway.log";
        dSGWXMLFile.logSizeMB = "10";
        dSGWXMLFile.logBackup = "10";
        dSGWXMLFile.logLevel = "4";
        dSGWXMLFile.secureMode = "True";
        dSGWXMLFile.logDaily = "False";
        dSGWXMLFile.threadPriority = "2";
        dSGWXMLFile.processPriority = "2";       
        dSGWXMLFile.sshParams = " - o \"BatchMode=yes\" -i \"<key>\" -l <limit> <host> \"<cmd>\"";
        dSGWXMLFile.sshPath = "C:\\Cygwin-x86_64\\bin";
        dSGWXMLFile.sftpParams = "-b \"<file>\" -o \"BatchMode=yes\" -i \"<key>\" -l <limit> \"<host>\"";
        dSGWXMLFile.puttyPath = "C:\\Program Files (x86)\\PuTTY";
        dSGWXMLFile.deletePath = "E:\\DSGW\\Upload";
        dSGWXMLFile.retryFileTransfer = "20";
        return dSGWXMLFile;
    }

    updateDSGWXMLFile(dsgwXMLFile: DSGWXMLFile)
    {
       // let headers = new Headers();
      //  headers.append('Content-Type', 'application/json');

       // const httpOptions = {
        //    headers: new HttpHeaders({
       //         'Content-Type': 'application/json',
       //         'Authorization': 'my-auth-token'
        //    })
      //  };

      // const options = new RequestOptions({
            
      //      headers: headers
      //  });
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let bodyObj = {
            "configSections": {
                "sectionGroup": {
                    "section": {
                        "name": "DSGWService.Properties.Settings",
                        "type": "System.Configuration.ClientSettingsSection, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089",
                        "requirePermission": "false",
                        "value": null
                    },
                    "name": "applicationSettings",
                    "type": "System.Configuration.ApplicationSettingsGroup, System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"
                }
            },
            "applicationSettings": {
                "dsgwServicePropertiesSettings": [
                    {
                        "value": "E:\\DSGW\\GW",
                        "name": "AppDir",
                        "serializeAs": "String"
                    },
                    {
                        "value": "-load <session> -b <file> -be -bc -batch",
                        "name": "psftpParams",
                        "serializeAs": "String"
                    },
                    {
                        "value": "10",
                        "name": "LogStatus",
                        "serializeAs": "String"
                    },
                    {
                        "value": "E:\\DSGW\\Log\\Gateway.log",
                        "name": "LogFile",
                        "serializeAs": "String"
                    },
                    {
                        "value": "10",
                        "name": "LogSizeMB",
                        "serializeAs": "String"
                    },
                    {
                        "value": "10",
                        "name": "LogBackup",
                        "serializeAs": "String"
                    },
                    {
                        "value": "4",
                        "name": "LogLevel",
                        "serializeAs": "String"
                    },
                    {
                        "value": "True",
                        "name": "LogDaily",
                        "serializeAs": "String"
                    },
                    {
                        "value": "2",
                        "name": "ThreadPriority",
                        "serializeAs": "String"
                    },
                    {
                        "value": "2",
                        "name": "ProcessPriority",
                        "serializeAs": "String"
                    },
                    {
                        "value": "False",
                        "name": "SecureMode",
                        "serializeAs": "String"
                    },
                    {
                        "value": "-o \"BatchMode=yes\" -i \"<key>\" -l <limit> <host> \"<cmd>\"",
                        "name": "sshParams",
                        "serializeAs": "String"
                    },
                    {
                        "value": "C:\\Cygwin-x86_64\\bin",
                        "name": "sshPath",
                        "serializeAs": "String"
                    },
                    {
                        "value": "-b \"<file>\" -o \"BatchMode=yes\" -i \"<key>\" -l <limit> \"<host>\"",
                        "name": "sftpParams",
                        "serializeAs": "String"
                    },
                    {
                        "value": "C:\\Program Files (x86)\\PuTTY",
                        "name": "puttyPath",
                        "serializeAs": "String"
                    },
                    {
                        "value": "E:\\DSGW\\Upload",
                        "name": "DeletePath",
                        "serializeAs": "String"
                    },
                    {
                        "value": "30",
                        "name": "RetryFileTransfer",
                        "serializeAs": "String"
                    }
                ]
            },
            "startup": [
                {
                    "version": "v2.0.50727",
                    "value": null
                },
                {
                    "version": "v4.0",
                    "value": null
                }
            ]
        } ;

        //this.http.put(this.baseURL + 'api/DSGWServiceConfig/updateDSGWXMLFile', JSON.stringify(bodyObj), options);
       // return this.http
        //    .put(this.baseURL + 'api/DSGWServiceConfig/updateDSGWXMLFile', JSON.stringify(bodyObj), options)
         //   .catch(this.handleError);

       // this.http
        //    .put(this.baseURL + 'api/DSGWServiceConfig/updateDSGWXMLFile', JSON.stringify(bodyObj), options)
         //   .map(this.extractData)
         //   .catch(this.handleError);

        this.http.put(this.baseURL + 'api/DSGWServiceConfig/updateConfiguration', JSON.stringify(bodyObj), options).map((res: Response) => res.json());
    }
    
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
