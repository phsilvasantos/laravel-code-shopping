import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';

import {AppComponent} from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginComponent} from './components/pages/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/bootstrap/modal/modal.component';
import {CategoryNewModalComponent} from './components/pages/category/category-new-modal/category-new-modal.component';
import {CategoryEditModalComponent} from './components/pages/category/category-edit-modal/category-edit-modal.component';
import {CategoryDeleteModalComponent} from './components/pages/category/category-delete-modal/category-delete-modal.component';
import {UserDeleteModalComponent} from './components/pages/user/user-delete-modal/user-delete-modal.component';
import {UserEditModalComponent} from './components/pages/user/user-edit-modal/user-edit-modal.component';
import {UserListComponent} from './components/pages/user/user-list/user-list.component';
import {UserNewModalComponent} from './components/pages/user/user-new-modal/user-new-modal.component';
import {ProductNewModalComponent} from './components/pages/product/product-new-modal/product-new-modal.component';
import {ProductEditModalComponent} from './components/pages/product/product-edit-modal/product-edit-modal.component';
import {ProductDeleteModalComponent} from './components/pages/product/product-delete-modal/product-delete-modal.component';
import {ProductListComponent} from './components/pages/product/product-list/product-list.component';
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {ProductCategoryListComponent} from './components/pages/product-category/product-category-list/product-category-list.component';
import {ProductCategoryNewComponent} from './components/pages/product-category/product-category-new/product-category-new.component';
import {ProductCategoryDeleteModalComponent} from './components/pages/product-category/product-category-delete-modal/product-category-delete-modal.component';
import {AuthService} from './services/auth.service';
import {NavbarComponent} from './components/bootstrap/navbar/navbar.component';
import {RefreshTokenInterceptorService} from './services/refresh-token-interceptor.service';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {SortColumnComponent} from './components/common/sort-column/sort-column.component';
import {CategorySearchFormComponent} from './components/pages/category/category-search-form/category-search-form.component';
import {CategoryFormComponent} from './components/pages/category/category-form/category-form.component';
import {ProductFormComponent} from './components/pages/product/product-form/product-form.component';
import {ProductSearchFormComponent} from './components/pages/product/product-search-form/product-search-form.component';
import {UserSearchFormComponent} from './components/pages/user/user-search-form/user-search-form.component';
import {UserFormComponent} from './components/pages/user/user-form/user-form.component';
import {FieldErrorComponent} from './components/bootstrap/field-error/field-error.component';
import {isInvalidControlDirective, IsInvalidDirective} from './directives/is-invalid.directive';
import {ListErrorComponent} from './components/bootstrap/list-error/list-error.component';
import {CardErrorComponent} from './components/bootstrap/card-error/card-error.component';
import {ProductInputListComponent} from './components/pages/product-input/product-input-list/product-input-list.component';
import {ProductInputFormComponent} from './components/pages/product-input/product-input-form/product-input-form.component';
import {ProductInputNewModalComponent} from './components/pages/product-input/product-input-new-modal/product-input-new-modal.component';
import {ProductInputSearchFormComponent} from './components/pages/product-input/product-input-search-form/product-input-search-form.component';
import {Select2Module} from "ng2-select2";
import {ProductIdAutocompleteComponent} from './components/select2/product-id-autocomplete/product-id-autocomplete.component';
import {ProductOutputListComponent} from './components/pages/product-output/product-output-list/product-output-list.component';
import {ProductOutputFormComponent} from './components/pages/product-output/product-output-form/product-output-form.component';
import {ProductOutputNewModalComponent} from './components/pages/product-output/product-output-new-modal/product-output-new-modal.component';
import {ProductOutputSearchFormComponent} from './components/pages/product-output/product-output-search-form/product-output-search-form.component';
import {ProductPhotoManagerComponent} from './components/pages/product-photo/product-photo-manager/product-photo-manager.component';
import {ProductPhotoUploadComponent} from './components/pages/product-photo/product-photo-upload/product-photo-upload.component';
import {ProductPhotoEditModalComponent} from './components/pages/product-photo/product-photo-edit-modal/product-photo-edit-modal.component';
import {ProductPhotoDeleteModalComponent} from './components/pages/product-photo/product-photo-delete-modal/product-photo-delete-modal.component';
import {UserProfileComponent} from './components/pages/user-profile/user-profile.component';
import {PhoneNumberAuthModalComponent} from './components/common/phone-number-auth-modal/phone-number-auth-modal.component';
import {ChatGroupListComponent} from './components/pages/chat-group/chat-group-list/chat-group-list.component';
import {ChatGroupDeleteModalComponent} from './components/pages/chat-group/chat-group-delete-modal/chat-group-delete-modal.component';
import {ChatGroupEditModalComponent} from './components/pages/chat-group/chat-group-edit-modal/chat-group-edit-modal.component';
import {ChatGroupFormComponent} from './components/pages/chat-group/chat-group-form/chat-group-form.component';
import {ChatGroupNewModalComponent} from './components/pages/chat-group/chat-group-new-modal/chat-group-new-modal.component';
import {ChatGroupUserListComponent} from './components/pages/chat-group-user/chat-group-user-list/chat-group-user-list.component';
import {ChatGroupUserNewComponent} from './components/pages/chat-group-user/chat-group-user-new/chat-group-user-new.component';
import {UserIdAutocompleteComponent} from './components/select2/user-id-autocomplete/user-id-autocomplete.component';
import {SellerIdAutocompleteComponent} from './components/select2/seller-id-autocomplete/seller-id-autocomplete.component';
import {CustomerIdAutocompleteComponent} from './components/select2/customer-id-autocomplete/customer-id-autocomplete.component';
import {ChatGroupUserDeleteModalComponent} from './components/pages/chat-group-user/chat-group-user-delete-modal/chat-group-user-delete-modal.component';
import {ChatGroupLinkInvListComponent} from './components/pages/chat-group-link-inv/chat-group-link-inv-list/chat-group-link-inv-list.component';
import {ChatGroupLinkInvFormComponent} from './components/pages/chat-group-link-inv/chat-group-link-inv-form/chat-group-link-inv-form.component';
import {ChatGroupLinkInvEditModalComponent} from './components/pages/chat-group-link-inv/chat-group-link-inv-edit-modal/chat-group-link-inv-edit-modal.component';
import {ChatGroupLinkInvDeleteModalComponent} from './components/pages/chat-group-link-inv/chat-group-link-inv-delete-modal/chat-group-link-inv-delete-modal.component';
import {ChatGroupLinkInvNewModalComponent} from './components/pages/chat-group-link-inv/chat-group-link-inv-new-modal/chat-group-link-inv-new-modal.component';
import {ChatGroupLinkInvUserListComponent} from './components/pages/chat-group-link-inv-user/chat-group-link-inv-user-list/chat-group-link-inv-user-list.component';
import {ChatGroupLinkInvUserStatusComponent} from './components/pages/chat-group-link-inv-user/chat-group-link-inv-user-status/chat-group-link-inv-user-status.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CategoryListComponent,
        AlertErrorComponent,
        ModalComponent,
        CategoryNewModalComponent,
        CategoryEditModalComponent,
        CategoryDeleteModalComponent,
        UserDeleteModalComponent,
        UserEditModalComponent,
        UserListComponent,
        UserNewModalComponent,
        ProductNewModalComponent,
        ProductEditModalComponent,
        ProductDeleteModalComponent,
        ProductListComponent,
        NumberFormatBrPipe,
        ProductCategoryListComponent,
        ProductCategoryNewComponent,
        ProductCategoryDeleteModalComponent,
        NavbarComponent,
        SortColumnComponent,
        CategorySearchFormComponent,
        CategoryFormComponent,
        ProductFormComponent,
        ProductSearchFormComponent,
        UserSearchFormComponent,
        UserFormComponent,
        FieldErrorComponent,
        IsInvalidDirective,
        isInvalidControlDirective,
        ListErrorComponent,
        CardErrorComponent,
        ProductInputListComponent,
        ProductInputFormComponent,
        ProductInputNewModalComponent,
        ProductInputSearchFormComponent,
        ProductIdAutocompleteComponent,
        ProductOutputListComponent,
        ProductOutputFormComponent,
        ProductOutputNewModalComponent,
        ProductOutputSearchFormComponent,
        ProductPhotoManagerComponent,
        ProductPhotoUploadComponent,
        ProductPhotoEditModalComponent,
        ProductPhotoDeleteModalComponent,
        UserProfileComponent,
        PhoneNumberAuthModalComponent,
        ChatGroupListComponent,
        ChatGroupDeleteModalComponent,
        ChatGroupEditModalComponent,
        ChatGroupFormComponent,
        ChatGroupNewModalComponent,
        ChatGroupUserListComponent,
        ChatGroupUserNewComponent,
        UserIdAutocompleteComponent,
        SellerIdAutocompleteComponent,
        CustomerIdAutocompleteComponent,
        ChatGroupUserDeleteModalComponent,
        ChatGroupLinkInvListComponent,
        ChatGroupLinkInvFormComponent,
        ChatGroupLinkInvEditModalComponent,
        ChatGroupLinkInvDeleteModalComponent,
        ChatGroupLinkInvNewModalComponent,
        ChatGroupLinkInvUserListComponent,
        ChatGroupLinkInvUserStatusComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        Select2Module,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: (authService: AuthService) => {
                    return {
                        whitelistedDomains: [
                            new RegExp(`${environment.api.host}/*`)
                        ],
                        tokenGetter: () => {
                            return authService.getToken();
                        }
                    }
                },
                deps: [AuthService]
            }
        })
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RefreshTokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
