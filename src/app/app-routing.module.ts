import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BookComponent } from './book/book.component';
import { ListbookComponent } from './listbook/listbook.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PaymantComponent } from './paymant/paymant.component';
import { LocationComponent } from './location/location.component';
import { UserhomeComponent } from './userhome/userhome.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"Contact",component:ContactComponent},
  {path:"location",component:LocationComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:"addbook",component:BookComponent},
{path:"userhome",component:UserhomeComponent,children:[
  {path:'viewroom',component:RoomlistComponent},
  {path:"addbook",component:BookComponent},
  {path:"profiles",component:ProfilelistComponent},
  {path:'addprofile',component:ProfileComponent},
{path:"profile-details/:customerId",component:EmployeeDetailsComponent},
{path:'update-profile/:customerId',component:UpdateProfileComponent},
]},

{path:'viewroom',component:RoomlistComponent},
//{path:'addprofile',component:ProfileComponent},
//{path:"profile-details/:customerId",component:EmployeeDetailsComponent},
{path:'update-profile/:customerId',component:UpdateProfileComponent},
{path:"update-room/:roomId",component:UpdateRoomComponent},
{path:"deleteBook",component:DeleteBookComponent},
{path:"paymant",component:PaymantComponent},
{path:"location",component:LocationComponent},
{path:"update-employee/:employeeId",component:UpdateEmployeeComponent},
{path:"employee-details/:employeeId",component:EmployeeDetailsComponent},
{path:"view-room/:roomId",component:ViewRoomComponent},
//{path:"profiles",component:ProfilelistComponent},
{path:"create-employee",component:CreateEmployeeComponent},
{path:'adminhome',component:AdminhomeComponent,children:[
  {path:"addroom",component:AddRoomComponent},
  
  {path:"roomlist",component:RoomListComponent},
 
  {path:"employees",component:ListemployeeComponent},
{path:"create-employee",component:CreateEmployeeComponent},

{path:"booklist",component:ListbookComponent},
{path:"view-book/:bookingId",component:ListbookComponent},
]},
  
  {path:"login",component:UserLoginComponent},
  {path:"admin",component:AdminLoginComponent},

  {path:"register",component:RegistrationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
