<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Exceptions\ChatGroupInvitationUserException;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Resources\ChatGroupInvitationUserCollection;
use CodeShopping\Http\Resources\ChatGroupInvitationUserResource;
use CodeShopping\Models\ChatGroup;
use CodeShopping\Models\ChatGroupInvitation;
use CodeShopping\Models\ChatGroupInvitationUser;
use Illuminate\Http\Request;

class ChatGroupInvitationUserController extends Controller
{
    public function index(ChatGroup $chatGroup)
    {
        $userInvitations = $chatGroup->userInvitations()->with('user')->paginate();
        return new ChatGroupInvitationUserCollection($userInvitations, $chatGroup);
    }

    public function store(ChatGroupInvitation $invitation_slug)
    {
        try {
            $chatGroupInvitationUser = ChatGroupInvitationUser::createIfAllowed($invitation_slug, \Auth::gard('api')->user());
            return new ChatGroupInvitationUserResource($chatGroupInvitationUser);
        } catch (ChatGroupInvitationUserException $exception) {
            switch ($exception->getCode()) {
                case ChatGroupInvitationUserException::ERROR_NOT_INVITATION:
                case ChatGroupInvitationUserException::ERROR_IS_MEMBER:
                case ChatGroupInvitationUserException::ERROR_HAS_STORED:
                    return abort(403, $exception->getMessage());
                    break;
                case ChatGroupInvitationUserException::ERROR_HAS_SELLER:
                    return abort(422, $exception->getMessage());
                    break;
            }
        }
    }

    public function show(ChatGroup $chatGroup, ChatGroupInvitationUser $invitation)
    {
        $this->assertInvitation($chatGroup, $invitation);

        return new ChatGroupInvitationUserResource($invitation);
    }

    public function update(Request $request, ChatGroup $chatGroup, ChatGroupInvitationUser $invitation)
    {
        $this->assertInvitation($chatGroup, $invitation);

        if ($invitation->status != ChatGroupInvitationUser::STATUS_PENDING) {
            abort(403, 'Este convite não está mais pendente.');
        }

        $this->validate($request, [
            'status' => 'required|in:' .
                ChatGroupInvitationUser::STATUS_APPROVED . ',' .
                ChatGroupInvitationUser::STATUS_REPROVED
        ]);

        $invitation->status = $request->get('status');
        $invitation->save();
        return new ChatGroupInvitationUserResource($invitation);
    }

    private function assertInvitation(ChatGroup $chatGroup, ChatGroupInvitationUser $invitation)
    {
        if ($chatGroup->id != $invitation->chatGroupInvitation->chat_group_id) {
            abort(404);
        }
    }

}
