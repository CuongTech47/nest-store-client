<template>
    <div>
      <div class="content">
        <div class="container-fluid">
          <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
          <div
            class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
          >
            <p class="_title0">
              Category
              <Button 
                ><Icon type="md-add" /> Add Category</Button
              >
            </p>
  
            <div class="_overflow _table_div">
              <table class="_table">
                <!-- TABLE TITLE -->
                <tr>
                  <th>Id</th>
                  <th>Category Name</th>
                  <th>Category Status</th>
                  <th>Created at</th>
                  <th>Action</th>
                </tr>
                <!-- TABLE TITLE -->
  
                <!-- ITEMS -->
                <!-- <tr v-for="(cat, i) in cats" :key="i">
                  <td>{{ cat.category_id }}</td>
                  <td class="_table_name">{{ cat.category_name }}</td>
                  <td v-if="cat.category_status == 0">An</td>
                  <td v-if="cat.category_status == 1">Hien thi</td>
                  <td>{{ cat.created_at }}</td>
                  <td>
                    <Button type="info" size="small" @click="showEditModal(cat, i)">Edit</Button>
                    <Button type="error" size="small" @click="showDeletingModal(cat, i)">Delete</Button>
                    
                  </td> -->
                <!-- </tr> -->
              </table>
            </div>
          </div>
          <!-- ADD CATEGORY MODAL -->
          <!-- <Modal
            v-model="addModal"
            title="Add Category"
            :mask-closable="false"
            :closable="false"
          >
            <Form v-model="data" :label-width="80">
              <FormItem label="Name">
                <Input v-model="data.category_name" placeholder="Enter your name"></Input>
              </FormItem>
              <FormItem label="Desc">
                <Input v-model="data.category_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="Trang Thai">
                <Select v-model="data.category_status" placeholder="chon trang thai hien thi">
                    <Option value="0">An</Option>
                    <Option value="1">Hien Thi</Option>
                </Select>
              </FormItem>
            </Form>
            <div slot="footer">
              <Button type="default" @click="addModal= false">Close</Button>
              <Button
                type="primary"
                @click="add_category"
                :disabled="isAdding"
                :loading="isAdding"
                >{{ isAdding ? "Adding.." : "Add Category" }}</Button>
            </div>
          </Modal> -->
  
          <!-- category editing modal -->
          <!-- <Modal
                      v-model="editModal"
                      title="Edit Category"
                      :mask-closable="false"
                      :closable="false"
                      >
                      <Form v-model="editData" :label-width="80">
              <FormItem label="Name">
                <Input v-model="editData.category_name" placeholder="Enter your name"></Input>
              </FormItem>
              <FormItem label="Desc">
                <Input v-model="editData.category_desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="Trang Thai">
                <select v-model="editData.category_status" >
                    <option value="0">An</option>
                    <option value="1">Hien thi</option>
                </select>
              </FormItem>
            </Form>
  
                      <div slot="footer">
                          <Button type="default" @click="editModal=false">Close</Button>
                          <Button type="primary" @click="edit_category" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Editing..' : 'Edit Category'}}</Button>
                      </div>
                  </Modal> -->
          <!-- category deleting modal -->
          <!-- <Modal v-model="showDeleteModal" width="360">
              <p slot="header" style="color:#f60;text-align:center">
                  <Icon type="ios-information-circle"></Icon>
                  <span>Delete confirmation</span>
              </p>
              <div style="text-align:center">
                  <p>Are you sure you want to delete Category ?</p>
              </div>
              <div slot="footer">
                  <Button type="error" @click="delete_category" size="large" long :loading="isDeleing" :disabled="isDeleing">Delete</Button>
              </div>
          </Modal> -->
        </div>
      </div>
    </div>
  </template>