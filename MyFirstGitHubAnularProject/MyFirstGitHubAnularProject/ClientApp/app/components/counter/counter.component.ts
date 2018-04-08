import { Component, OnInit } from '@angular/core';
import { providerDef } from '@angular/core/src/view/provider';
import { DSGWXMLFileService } from '../../service/counter.service';
import { DSGWXMLFile } from '../../model/dsgwXMLFile.model';
//import swal from 'sweetalert2';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    providers: [DSGWXMLFileService]

})
export class CounterComponent {
    //Thread Priority Options
    threadPriorityOptions: string[] = ["0", "1", "2", "3", "4"];
    processPriorityOptions: string[] = ["0", "1", "2", "3"];
    logLevelOptions: string[] = ["0", "1", "2", "3", "4", "5"];
    threadPriorityOption: number;
    processPriorityOption: number;
    logLevelOption: number;
    secureModeCheckBox: boolean;
    logDailyCheckBox: boolean;
    dSGWXMLFile: DSGWXMLFile;

    constructor(private dsgwFileService: DSGWXMLFileService) {
        
        this.getConfigData();
    }

    ngOnInit() {

    }

    getConfigData() {
        this.dSGWXMLFile = this.dsgwFileService.getDSGWXMLFile();
        this.threadPriorityOption = Number(this.dSGWXMLFile.threadPriority);
        this.processPriorityOption = Number(this.dSGWXMLFile.processPriority);
        this.logLevelOption = Number(this.dSGWXMLFile.logLevel);
        this.secureModeCheckBox = this.stringToBoolean(this.dSGWXMLFile.secureMode);
        this.logDailyCheckBox = this.stringToBoolean(this.dSGWXMLFile.logDaily);
        
    }
    stringToBoolean(value: string): boolean {
            switch (value.toLowerCase().trim()) {
            case "true": {
                return true;               
            }
            case "false":{
                return false;                
            }                
            default: return false;;
    }
}
    onLogOptionsSelected(value: any) {
        this.dSGWXMLFile.logLevel = value;
    }
    onThreadOptionsSelected(value: any) {
        this.dSGWXMLFile.threadPriority = value;
    }
    onProcessOptionsSelected(value: any) {
        this.dSGWXMLFile.processPriority = value;
    }
    onCancelClick() {
        this.getConfigData();
    } 

    booleanToString(value: boolean) : string {

        switch (value.toString()) {
            case "true": {
                return "True";
            }
            case "false": {
                return "False";
            }
            default: return "False";;
        }
    }
    secureModeChange(value: any) {
        this.dSGWXMLFile.secureMode = this.booleanToString(value);
    }
    dailyLogChange(value: any) {
        this.dSGWXMLFile.logDaily = this.booleanToString(value);
    }

    saveConfigData() {


       var locString = "appDir= " + this.dSGWXMLFile.appDir + "\n"+
           " psftpParams= " + this.dSGWXMLFile.psftpParams + "\n" +
           " logStatus= " + this.dSGWXMLFile.logStatus+ "\n" +
           " logFile= " + this.dSGWXMLFile.logFile + "\n" +
           " logSizeMB= " + this.dSGWXMLFile.logSizeMB + "\n" +
           " logBackup= " + this.dSGWXMLFile.logBackup + "\n" + 
           " secureMode= " + this.dSGWXMLFile.secureMode + "\n" +
           " logDaily= " + this.dSGWXMLFile.logDaily + "\n" +
           " threadPriority= " + this.dSGWXMLFile.threadPriority +"---------------"+ "\n" +
           " processPriority= " + this.dSGWXMLFile.processPriority + "---------------" + "\n" +
           " logLevel= " + this.dSGWXMLFile.logLevel + "---------------" + "\n" +          
           " sshParams= " + this.dSGWXMLFile.sshParams + "\n" +
           " sshPath= " + this.dSGWXMLFile.sshPath + "\n" +
           " sftpParams= " + this.dSGWXMLFile.sftpParams + "\n" +
           " puttyPath= " + this.dSGWXMLFile.puttyPath + "\n" +
           " deletePath= " + this.dSGWXMLFile.deletePath + "\n" +
            " retryFileTransfer =" + this.dSGWXMLFile.retryFileTransfer

        //alert(locString);
        //swal("", ", Data Saved Successfully", "success");

    }

    handleCancelButton() {
        this.dsgwFileService.getDSGWXMLFile();
    }
}
