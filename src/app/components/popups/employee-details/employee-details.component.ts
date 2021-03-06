import { Component, Inject, INJECTOR, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Employee } from 'src/app/models/employee';

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = this.data['employee'] as Employee;

  constructor(
    private dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.router.navigate(["employee-add"], this.employee);
    this.dialogRef.close();
  }
}
