import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BookComponent } from './book/book.component';
import { ListbookComponent } from './listbook/listbook.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import { PaymantComponent } from './paymant/paymant.component';
import { LocationComponent } from './location/location.component';
import { UserhomeComponent } from './userhome/userhome.component';






@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegistrationComponent,
  
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    AdminLoginComponent,
    AddRoomComponent,
    ViewRoomComponent,
    UpdateRoomComponent,
    RoomListComponent,
    BookComponent,
    ListbookComponent,
    AdminhomeComponent,
    DeleteBookComponent,
    RoomlistComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    ListemployeeComponent,
    UpdateEmployeeComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ProfileDetailsComponent,
    ProfilelistComponent,
    PaymantComponent,
    LocationComponent,
    UserhomeComponent,
   
   
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
