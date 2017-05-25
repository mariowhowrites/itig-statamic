<?php

namespace Statamic\Addons\StatamicCampaign;

use Statamic\Contracts\Forms\Submission;
use Statamic\Data\Globals\GlobalFactory;
use Statamic\Extend\Listener;

class StatamicCampaignListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = ['Form.submission.created' =>  'sendToActiveCampaign'];

    public function sendToActiveCampaign(Submission $submission) {

        $request = new GuzzleHttp\Psr7\Request('POST', 'https://itig.api-us1.com/api/3/contacts');

    }
}
